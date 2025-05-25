const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { placeBet } = require('../controllers/betController');

router.post('/', protect, placeBet);

module.exports = router;