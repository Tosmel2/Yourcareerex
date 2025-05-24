const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const User = require('../models/User');


exports.transferMoney = async (req, res) => {
  try {
    const { recipientEmail, recipientId, amount } = req.body;
    if ((!recipientEmail && !recipientId) || !amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid recipient or amount" });
    }

    const senderWallet = await Wallet.findOne({ user: req.user.id });
    if (!senderWallet) return res.status(404).json({ message: "Sender wallet not found" });

    if (senderWallet.balance < Number(amount)) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Find recipient user by email or id
    let recipientUser;
    if (recipientId) {
      recipientUser = await User.findById(recipientId);
    } else {
      recipientUser = await User.findOne({ email: recipientEmail });
    }
    if (!recipientUser) return res.status(404).json({ message: "Recipient not found" });

    const recipientWallet = await Wallet.findOne({ user: recipientUser._id });
    if (!recipientWallet) return res.status(404).json({ message: "Recipient wallet not found" });

    // Perform transfer
    senderWallet.balance -= Number(amount);
    recipientWallet.balance += Number(amount);

    await senderWallet.save();
    await recipientWallet.save();

    // Log transaction
    await Transaction.create({
      sender: req.user.id,
      receiver: recipientUser._id,
      amount: Number(amount),
     status: 'success'
    });

    res.status(200).json({ message: 'Transfer successful' });
  } catch (err) {
    res.status(500).json({ message: "Error transferring money" });
  }
};

exports.getTransactionHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({
      $or: [
        { sender: userId },
        { receiver: userId }
      ]
    })
    .sort({ timestamp: -1 })
    .populate('sender', 'name email')
    .populate('receiver', 'name email');

    res.status(200).json({ transactions });
  } catch (err) {
    res.status(500).json({ message: "Error fetching transactions" });
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


exports.fundWallet = async (req, res) => {
  try {
    // const { amount } = req.body;
    const { amount } = req.body;
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const wallet = await Wallet.findOne({ user: req.user.id });

    if (!wallet) return res.status(404).json({ message: "Wallet not found" });

    wallet.balance += Number(amount);
    await wallet.save();

    res.status(200).json({ message: 'Wallet funded', balance: wallet.balance });
  } catch (err) {
    res.status(500).json({ message: "Error funding wallet" });
  }
};

