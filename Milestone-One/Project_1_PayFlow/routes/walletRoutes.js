const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getWallet } = require('../controllers/walletController');

router.get('/', auth, getWallet);

module.exports = router;
