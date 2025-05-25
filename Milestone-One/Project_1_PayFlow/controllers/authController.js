const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Wallet = require('../models/Wallet');
// const crypto = require('crypto');
// const sendEmail = require('../utils/sendEmail');

  
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    await Wallet.create({ 
      user: user._id,
      balance: 0 
    }); // Auto-create wallet

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// Future enhancements could include:
// Prevent Partial Registration Data
// exports.register = async (req, res) => {
//   const session = await User.startSession();
//   session.startTransaction();
//   try {
//     const { name, email, password } = req.body;
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       await session.abortTransaction();
//       session.endSession();
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create([{ name, email, password: hashedPassword }], { session });

//     await Wallet.create([{ user: user[0]._id, balance: 0 }], { session });

//     await session.commitTransaction();
//     session.endSession();

//     res.status(201).json({ msg: 'User registered successfully' });
//   } catch (err) {
//     await session.abortTransaction();
//     session.endSession();
//     res.status(500).json({ error: err.message });
//   }
// };

// ====================ForgotPasword Implementation
// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: 'User not found' });

//     // Generate token
//     const token = crypto.randomBytes(32).toString('hex');
//     user.resetPasswordToken = token;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
//     await user.save();

//     // Send email (implement sendEmail utility)
//     const resetUrl = `http://localhost:5000/reset-password/${token}`;
//     await sendEmail(user.email, 'Password Reset', `Reset your password: ${resetUrl}`);

//     res.json({ msg: 'Password reset link sent to your email' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// ===================Reset Password Implementation=====================
// exports.resetPassword = async (req, res) => {
//   const { token } = req.params;
//   const { password } = req.body;
//   try {
//     const user = await User.findOne({
//       resetPasswordToken: token,
//       resetPasswordExpires: { $gt: Date.now() }
//     });
//     if (!user) return res.status(400).json({ msg: 'Invalid or expired token' });

//     user.password = await bcrypt.hash(password, 10);
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save();

//     res.json({ msg: 'Password reset successful' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };