const express = require("express");
const subCategoryController = require("../controllers/SubCategory");

const router = express.Router();

// SubCategory Routes
router.post("/add", subCategoryController.addSubCategory);
router.put("/subcategory/:id", subCategoryController.updateSubCategory);
router.get("/subcategory/:id", subCategoryController.getSubCategory);
router.delete("/subcategory/:id", subCategoryController.deleteSubCategory);
router.get("/", subCategoryController.listSubCategories);

module.exports = router;
