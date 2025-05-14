const router = require('express').Router();
const { createCategory } = require('../controllers/categoryController');
const protect = require('../middlewares/authMiddleware');
const adminOnly = require('../middlewares/roleMiddleware');

router.post('/', protect, adminOnly, createCategory);

module.exports = router;


