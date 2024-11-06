

// module.exports = router;
const express = require("express");
const userController = require("../controllers/User");
const router = express.Router();

// Category Routes
router.post("/signup", userController.signUp);
router.post("/login", userController.login);
//router.get("/", courseController.listCourses);

module.exports = router;
