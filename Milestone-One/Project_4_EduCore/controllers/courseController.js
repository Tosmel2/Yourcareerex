const Course = require("../models/Course");
const Enrollment = require('../models/Enrollment');



exports.createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const course = await Course.create({ title, description, price, instructor: req.user.id });
    // const course = await Course.create({ title, description, price });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourseDetail = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markCourseCompleted = async (req, res) => {
  try {
    const enrollment = await Enrollment.findOneAndUpdate(
      { student: req.user.id, course: req.params.courseId },
      { completed: true },
      { new: true }
    );
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.json({ message: 'Course marked as completed', enrollment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
