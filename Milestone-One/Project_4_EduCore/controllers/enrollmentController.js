const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.enrollInCourse = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    // Prevent duplicate enrollment
    const alreadyEnrolled = await Enrollment.findOne({ student: studentId, course: courseId });
    if (alreadyEnrolled) return res.status(400).json({ message: 'Already enrolled in this course' });

    // Create enrollment
    const enrollment = await Enrollment.create({ student: studentId, course: courseId });
    res.status(201).json({ message: 'Course Enrolled successfully', enrollment });
  } catch (err) {
    res.status(500).json({ message: 'Error enrolling in course' });
  }
};

exports.getEnrolledStudents = async (req, res) => {
  try {
    const { courseId } = req.params;
    const enrollments = await Enrollment.find({ course: courseId }).populate('student', 'name email');
    res.status(200).json({ students: enrollments.map(e => e.student) });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching enrolled students' });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user.id }).populate('course');
    res.json(enrollments.map(e => ({
      course: e.course,
      completed: e.completed
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
