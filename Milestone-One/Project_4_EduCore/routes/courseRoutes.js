const express = require("express");
const router = express.Router();
const { createCourse, getCourses } = require("../controllers/courseController");
const auth = require("../middlewares/authMiddleware");
const restrictTo = require("../middlewares/roleMiddleware");

router.post("/", auth, restrictTo("instructor"), createCourse);
router.get("/", getCourses);

module.exports = router;
