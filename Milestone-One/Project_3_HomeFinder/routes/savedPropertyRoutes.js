const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { saveProperty, unsaveProperty, getSavedProperties } = require('../controllers/savedPropertyController');

router.post('/save', protect, saveProperty);
router.post('/unsave', protect, unsaveProperty);
router.get('/', protect, getSavedProperties);

module.exports = router;