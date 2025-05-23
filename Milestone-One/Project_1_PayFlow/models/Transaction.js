// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['success', 'failed'], default: 'success' }
});

module.exports = mongoose.model('Transaction', transactionSchema);
