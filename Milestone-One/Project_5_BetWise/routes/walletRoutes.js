const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getWallet, fundWallet } = require('../controllers/walletController');

router.get('/', auth, getWallet);

router.post('/fund', auth, fundWallet);





module.exports = router;
