const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {enrollInCourse, getEnrolledStudents} = require('../controllers/enrollmentController');

// Student enrolls in a course
router.post('/', auth, enrollInCourse);

// Instructor views students in a course
router.get('/course/:courseId/students', auth, getEnrolledStudents);

module.exports = router;