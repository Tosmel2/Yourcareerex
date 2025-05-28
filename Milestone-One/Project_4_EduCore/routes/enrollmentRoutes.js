const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {enrollInCourse, getEnrolledStudents, getEnrolledCourses} = require('../controllers/enrollmentController');

// Student enrolls in a course
router.post('/', auth, enrollInCourse);
router.get('/enrolled', auth, getEnrolledCourses);

// Instructor views students in a course
router.get('/course/:courseId/students', auth, getEnrolledStudents);


module.exports = router;