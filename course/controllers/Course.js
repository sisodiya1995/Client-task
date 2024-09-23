const Course = require('../models/Course');

// Add Course
exports.addCourse = async (req, res) => {
  try {
    const course = new Course({
      name: req.body.name,
      categories: req.body.categories, // Array of Category IDs
      subCategories: req.body.subCategories, // Array of SubCategory IDs
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        categories: req.body.categories,
        subCategories: req.body.subCategories,
      },
      { new: true }
    );
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve a Course by ID
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('categories')
      .populate('subCategories');
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all Courses
exports.listCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('categories')
      .populate('subCategories');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
