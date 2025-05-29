const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { placeOrder, getOrderHistory, getOrderById } = require('../controllers/orderController');

router.post('/', protect, placeOrder);
router.get('/history', protect, getOrderHistory);
router.get('/:orderId', protect, getOrderById);

module.exports = router;