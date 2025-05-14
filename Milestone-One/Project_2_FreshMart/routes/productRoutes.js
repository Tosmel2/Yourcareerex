const router = require('express').Router();
const { createProduct, getAllProducts } = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');
const adminOnly = require('../middlewares/roleMiddleware');
const { post } = require('./authRoutes');

router.get('/', getAllProducts);
router.post('/', protect, adminOnly, createProduct);

module.exports = router;

