const Game = require('../models/Game');

exports.createGame = async (req, res) => {
  const { teams, odds, scheduledDate } = req.body;
  try {
    const game = await Game.create({ teams, odds, scheduledDate });
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};
