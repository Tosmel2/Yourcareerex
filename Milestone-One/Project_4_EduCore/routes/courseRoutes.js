const express = require("express");
const router = express.Router();
const { createCourse, getCourses, getCourseDetail, markCourseCompleted } = require("../controllers/courseController");
const auth = require("../middlewares/authMiddleware");
const restrictTo = require("../middlewares/roleMiddleware");

router.post("/", auth, restrictTo("instructor"), createCourse);
router.get("/", getCourses);
// router.get('/enrolled', auth, getEnrolledCourses);
router.get('/:courseId', auth, getCourseDetail);
router.post('/:courseId/complete', auth, markCourseCompleted);


module.exports = router;
