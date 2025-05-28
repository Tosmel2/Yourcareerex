const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Wallet = require('../models/Wallet');


exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, role, password: hashedPassword });

    const wallet = await Wallet.create({ 
      user: user._id,
      balance: 0 // Default balance if not provided
    }); // Auto-create wallet
    // console.log('Wallet created:', wallet);


    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    res.status(201).json({
      msg: "Registration successful", 
      token,
      WalletBalance: wallet.balance 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ msg: "Login Successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password');
//     if (!user) return res.status(404).json({ msg: 'User not found' });

//     const wallet = await Wallet.findOne({ user: user._id });
//     res.json({ user, wallet });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

