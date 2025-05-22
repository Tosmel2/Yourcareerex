const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { placeOrder, getOrderHistory } = require('../controllers/orderController');

router.post('/', protect, placeOrder);
router.get('/history', protect, getOrderHistory);

module.exports = router;