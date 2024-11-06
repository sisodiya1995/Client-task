const express = require("express");
const categoryController = require("../controllers/Category");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Category Routes
router.post("/add", categoryController.addCategory);
router.put("/category/:id", categoryController.updateCategory);
router.get("/category/:id", categoryController.getCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.get("/", authMiddleware, categoryController.listCategories);

module.exports = router;
