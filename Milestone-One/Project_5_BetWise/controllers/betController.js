const Bet = require('../models/Bet');
const Game = require('../models/Game');
const Wallet = require('../models/Wallet');


exports.placeBet = async (req, res) => {
  try {
    const { gameId, selection, stake } = req.body;
    const userId = req.user.userId;
    // console.log('User ID:', userId);

    // Fetch game and wallet
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ msg: 'Game not found' });

    // const wallet = await Wallet.findOne({ user: userId });
    const wallet = await Wallet.findOne({ user: userId });
    // console.log('Wallet found:', wallet);

    if (!wallet || wallet.balance < stake) {
      return res.status(400).json({ msg: 'Insufficient wallet balance' });
    }
   
    // Get odds for selection
    const odds = game.odds[selection];
    if (!odds) return res.status(400).json({ msg: 'Invalid selection' });

    // Calculate potential win
    const potentialWin = Number((stake * odds).toFixed(2));

    // Deduct stake from wallet
    wallet.balance -= stake;
    await wallet.save();

    // Record bet
    const bet = await Bet.create({
      user: userId,
      game: gameId,
      selection,
      stake,
      odds,
      potentialWin
    });

    res.status(201).json({ msg: 'Bet placed successfully', bet, walletBalance: wallet.balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};