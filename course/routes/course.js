const express = require("express");
const courseController = require("../controllers/Course");
const router = express.Router();

// Category Routes
router.post("/add", courseController.addCourse);
router.put("/course/:id", courseController.getCourse);
router.get("/", courseController.listCourses);

module.exports = router;
