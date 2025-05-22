const SavedProperty = require('../models/SavedProperty');

exports.saveProperty = async (req, res) => {
  try {
    const exists = await SavedProperty.findOne({ user: req.user._id, property: req.body.propertyId });
    if (exists) return res.status(400).json({ msg: 'Property already saved' });

    const saved = await SavedProperty.create({ user: req.user._id, property: req.body.propertyId });
    res.status(201).json({ msg: 'Property saved', saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.unsaveProperty = async (req, res) => {
  try {
    const removed = await SavedProperty.findOneAndDelete({ user: req.user._id, property: req.body.propertyId });
    if (!removed) return res.status(404).json({ msg: 'Saved property not found' });
    res.json({ msg: 'Property unsaved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSavedProperties = async (req, res) => {
  try {
    const saved = await SavedProperty.find({ user: req.user._id }).populate('property');
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};