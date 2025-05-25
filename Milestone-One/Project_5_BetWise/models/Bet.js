const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  selection: { type: String, enum: ['teamA', 'draw', 'teamB'], required: true },
  stake: { type: Number, required: true },
  odds: { type: Number, required: true },
  potentialWin: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bet', betSchema);