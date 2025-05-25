const Wallet = require('../models/Wallet');


exports.getWallet = async (req, res) => {
  try {
    // const wallet = await Wallet.findOne({ user: req.user.id });
    const wallet = await Wallet.findOne({ user: req.user.userId });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.fundWallet = async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // const wallet = await Wallet.findOne({ userId: req.user.id });
    const wallet = await Wallet.findOne({ user: req.user.userId });

    if (!wallet) return res.status(404).json({ message: "Wallet not found" });

    wallet.balance += Number(amount);
    await wallet.save();

    res.status(200).json({ message: 'Wallet funded', balance: wallet.balance });
  } catch (err) {
    res.status(500).json({ message: "Error funding wallet" });
  }
};

