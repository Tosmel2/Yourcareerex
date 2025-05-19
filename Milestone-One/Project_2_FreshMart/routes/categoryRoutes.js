const router = require('express').Router();
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const protect = require('../middlewares/authMiddleware');
const adminOnly = require('../middlewares/roleMiddleware');

router.post('/', protect, adminOnly, createCategory);
router.get('/', protect, getAllCategories);

module.exports = router;


