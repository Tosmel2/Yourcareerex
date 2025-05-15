const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  teams: { type: String, required: true },
  odds: { type: Number, required: true },
  scheduledDate: { type: Date, required: true },
});

module.exports = mongoose.model('Game', gameSchema);

