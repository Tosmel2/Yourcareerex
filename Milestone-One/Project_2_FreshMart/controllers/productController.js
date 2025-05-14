const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const product = await Product.create({ name, description, price, category, stock });
  res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
};
