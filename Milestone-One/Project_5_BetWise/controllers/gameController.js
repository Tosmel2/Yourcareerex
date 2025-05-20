const Game = require('../models/Game');
const Wallet = require('../models/Wallet');


exports.createGame = async (req, res) => {
  const { teamA, teamB, odds, startTime } = req.body;
  try {
    const game = await Game.create({ teamA, teamB, odds, startTime });
    res.status(201).json({ msg: "Game created successful", game });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
