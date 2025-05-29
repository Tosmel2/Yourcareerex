const express = require('express');
const router = express.Router();
const { createGame, getAllGames, setGameResult } = require('../controllers/gameController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');


router.post('/', auth, role('admin'), createGame);
router.get('/', auth, getAllGames);
router.post('/:gameId/result', auth, role('admin'), setGameResult);






module.exports = router;
