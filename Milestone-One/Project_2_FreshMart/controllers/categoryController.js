const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.status(201).json(category);
};
