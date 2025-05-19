const Course = require("../models/Course");

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
