const jwt = require('jsonwebtoken');
// const User = require('../models/User');

const protect = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Fetch the full user from DB
    const user = await User.findById(decoded.userId).select('-password');
    console.log(user);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    req.user = user; // now includes role, name, etc.
    // req.user = { id: decoded.userId };

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = protect;

// const protect = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Not authorized' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.userId).select('-password');
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     // console.log('JWT_SECRET during verify:', process.env.JWT_SECRET);
//     req.user = user;
//     next();
//   } catch {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = protect;
