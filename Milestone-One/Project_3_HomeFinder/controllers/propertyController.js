const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { title, description, location, price } = req.body;
  const property = await Property.create({ title, description, location, price, createdBy: req.user._id });
  res.status(201).json(property);
};

exports.getProperties = async (req, res) => {
  const properties = await Property.find().populate('createdBy', 'name email');
  res.json(properties);
};
