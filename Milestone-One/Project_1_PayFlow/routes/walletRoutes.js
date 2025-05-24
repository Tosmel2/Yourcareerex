const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getWallet, transferMoney, getTransactionHistory, fundWallet } = require('../controllers/walletController');

router.get('/', auth, getWallet);
router.get('/transactions', auth, getTransactionHistory);
router.post('/transfer', auth, transferMoney);


router.post('/fund', auth, fundWallet);
// router.post('/transfer', auth, fundWallet);




module.exports = router;
