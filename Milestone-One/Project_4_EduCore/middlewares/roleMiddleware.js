module.exports = function restrictTo(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ msg: "You do not have permission to perform this action" });
    }
    next();
  };
};



// module.exports = (role) => {
//   return (req, res, next) => {
//     if (req.user.role !== role) {
//       return res.status(403).json({ error: "Access denied" });
//     }
//     next();
//   };
// };
