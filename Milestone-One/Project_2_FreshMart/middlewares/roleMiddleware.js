const adminOnly = (req, res, next) => {
    console.log('Current User:', req.user); 
    console.log('Current User:', req.user?.role); 
    // if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
    if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied. Admins only.' });
  }
    next();
  };
  
  module.exports = adminOnly;

// exports.isAdmin = (req, res, next) => {
//   if (req.user?.role !== 'admin')
//     return res.status(403).json({ msg: 'Access denied. Admins only.' });

//   next();
// };
