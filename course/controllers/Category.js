const Category = require("../models/Category");

// Add Category
exports.addCategory = async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();

    return res.status(201).json({
      message: "Category Created!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    return res.status(201).json({
      message: "Category Updated!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve Category
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List Categories
exports.listCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({
      _id: req.params.id,
    });

    res.status(200).json({
      message: "Deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server Error",
    });
  }
};
