const Game = require('../models/Game');
const Wallet = require('../models/Wallet');
const Bet = require('../models/Bet');




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

exports.setGameResult = async (req, res) => {
  try {
    const { gameId } = req.params;
    const { result } = req.body; // 'teamA', 'draw', or 'teamB'

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ msg: 'Game not found' });

    game.result = result;
    await game.save();

    // Find winning bets
    const winningBets = await Bet.find({ game: gameId, selection: result });

    // Pay out winners
    for (const bet of winningBets) {
      const wallet = await Wallet.findOne({ user: bet.user });
      if (wallet) {
        wallet.balance += bet.potentialWin;
        await wallet.save();
      }
    }

    res.json({ msg: 'Result set and payouts processed', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
