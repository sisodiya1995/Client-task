const express = require("express");
const categoryController = require("../controllers/Category");

const router = express.Router();

// Category Routes
router.post("/add", categoryController.addCategory);
router.put("/category/:id", categoryController.updateCategory);
router.get("/category/:id", categoryController.getCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.get("/", categoryController.listCategories);

module.exports = router;
