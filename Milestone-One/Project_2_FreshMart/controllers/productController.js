const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const product = await Product.create({ name, description, price, category, stock });
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
};
