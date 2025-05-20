const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  odds: {
    teamA: { type: Number, required: true },
    draw: { type: Number, required: true },
    teamB: { type: Number, required: true }
  },
  startTime: { type: Date, required: true }
});

module.exports = mongoose.model('Game', gameSchema);

