const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { title, description, location, price } = req.body;
  const property = await Property.create({ title, description, location, price, createdBy: req.user._id });
  res.status(201).json(property);
};

// exports.getProperties = async (req, res) => {
//   const properties = await Property.find().populate('createdBy', 'name email');
//   res.json(properties);
// };

exports.getProperties = async (req, res) => {
  try {
    const { location, minPrice, maxPrice } = req.query;
    let filter = {};
     if (location) filter.location = { $regex: new RegExp(location, 'i') }; // case-insensitive
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    const properties = await Property.find(filter).populate('createdBy', 'name email');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: 'Property not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};