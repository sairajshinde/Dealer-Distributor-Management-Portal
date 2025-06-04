import { Op, fn, col, literal } from "sequelize";
import Inventory from "../models/Inventory.js";
import Order from "../models/Order.js";

export const getDashboardStats = async (req, res) => {
  try {
    
    const totalProducts = await Inventory.count();

    
    const lowStockProducts = await Inventory.findAll({
      order: [["quantity", "ASC"]],
      limit: 3,
    });

    
    const totalOrders = await Order.count();

    
    const totalRevenueResult = await Order.findAll({
      attributes: [[fn("SUM", col("totalAmount")), "totalRevenue"]],
    });
    const totalRevenue = parseFloat(totalRevenueResult[0].dataValues.totalRevenue) || 0;

    
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);

    const monthlySales = await Order.findAll({
      attributes: [
        [fn("MONTH", col("createdAt")), "month"],
        [fn("YEAR", col("createdAt")), "year"],
        [fn("SUM", col("totalAmount")), "revenue"],
        [fn("COUNT", col("id")), "orders"]
      ],
      where: {
        createdAt: { [Op.gte]: sixMonthsAgo }
      },
      group: [fn("YEAR", col("createdAt")), fn("MONTH", col("createdAt"))],
      order: [[fn("YEAR", col("createdAt")), "ASC"], [fn("MONTH", col("createdAt")), "ASC"]]
    });

    
    
    const topProductsQuery = await Order.findAll({
      attributes: ["items"]
    });

    const productCountMap = {};

    topProductsQuery.forEach(order => {
      const items = order.items || [];
      items.forEach(item => {
        const name = item.name;
        const qty = item.quantity;
        if (productCountMap[name]) {
          productCountMap[name] += qty;
        } else {
          productCountMap[name] = qty;
        }
      });
    });

    const topSellingProducts = Object.entries(productCountMap)
      .map(([name, qty]) => ({ name, quantitySold: qty }))
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, 5);

    
    res.json({
      totalProducts,
      lowStockProducts,
      totalOrders,
      totalRevenue,
      monthlySales,
      topSellingProducts
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading dashboard data" });
  }
};
