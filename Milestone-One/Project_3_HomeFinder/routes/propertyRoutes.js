const express = require('express');
const router = express.Router();
const { createProperty, getProperties } = require('../controllers/propertyController');
const protect = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');

router.post('/', protect, allowRoles('agent'), createProperty);
router.get('/', getProperties);

module.exports = router;
