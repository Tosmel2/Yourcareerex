const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { placeBet, getUserBets, getAllResults } = require('../controllers/betController');


router.post('/', protect, placeBet);
router.get('/history', protect, getUserBets);
router.get('/results', getAllResults);



module.exports = router;