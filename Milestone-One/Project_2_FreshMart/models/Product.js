const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
