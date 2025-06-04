import Document from "../models/upload.js";

export const uploadDocument = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const document = await Document.create({
      productId,
      filename: req.file.filename,
      originalName: req.file.originalname,
      fileType: req.file.mimetype,
      uploadedBy: req.user.role,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      document,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getDocumentsByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const documents = await Document.findAll({ where: { id } });
    res.json(documents);
  } catch (err) {
    console.error("Error fetching documents:", err); 
    res.status(500).json({ message: "Internal Server Error" });
  }
};

