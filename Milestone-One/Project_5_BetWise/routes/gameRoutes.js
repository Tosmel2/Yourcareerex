const express = require('express');
const { createGame, getAllGames } = require('../controllers/gameController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', auth, role('admin'), createGame);
router.get('/', auth, getAllGames);

module.exports = router;