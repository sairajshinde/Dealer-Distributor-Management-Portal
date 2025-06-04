
# Dealer & Distributor Management Portal

This is the backend API for the **Dealer & Distributor Management Portal**, built with **Node.js**, **Express**, **Sequelize**, and **MySQL**. It supports user authentication, dealer/distributor onboarding, inventory and order management, and dashboard analytics.

---

## 🚀 Features

- JWT-based Authentication
- Role-based Authorization (`admin`, `dealer`, `distributor`)
- Dealer/Distributor Onboarding & Approval
- Order Management APIs
- Inventory Management APIs
- Dashboard & Reports
- Swagger API Documentation
- Sequelize ORM with MySQL

---

## 📁 Project Structure

```
src/
├── config/         # DB and env config
├── controllers/    # Business logic
├── middleware/     # Auth middlewares
├── models/         # Sequelize models
├── routes/         # Route handlers
├── swagger.js      # Swagger configuration
├── app.js          # Express app setup
└── server.js       # Entry point
```

---

## 🧪 API Documentation

Visit:

```
http://localhost:4000/api-docs
```

> Interactive Swagger UI with all route definitions and try-out functionality.

---

## ⚙️ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/Dealer-Distributor-Management-Portal.git
cd Dealer-Distributor-Management-Portal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file:

```env
PORT=4000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
```

### 4. Run the Server

```bash
npm run dev
```

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL with Sequelize ORM
- **Security:** JWT, bcrypt
- **Documentation:** Swagger (OpenAPI 3.0)

---

## 📌 To Do / Improvements

- Add email notification system
- File upload/import functionality
- Admin panel UI
- Unit and integration tests

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Sairaj Shinde**  
GitHub: [sairajshinde](https://github.com/sairajshinde)
