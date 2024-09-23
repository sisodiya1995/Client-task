const SubCategory = require("../models/SubCategory");

// Add SubCategory
exports.addSubCategory = async (req, res) => {
  try {
    const subCategory = new SubCategory({
      name: req.body.name,
      category: req.body.category,
    });
    await subCategory.save();

    return res.status(201).json({
      message: "Sub Category Created!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update SubCategory
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, category: req.body.category },
      { new: true }
    );

    return res.status(201).json({
      message: "Sub Category updated!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve SubCategory
exports.getSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({ _id: req.params.id });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List SubCategories
exports.listSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate("category");
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Sub Category
exports.deleteSubCategory = async (req, res) => {
  try {
    await SubCategory.deleteOne({
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
