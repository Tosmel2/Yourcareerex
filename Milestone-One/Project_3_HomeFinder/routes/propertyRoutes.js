const express = require('express');
const router = express.Router();
const { createProperty, getProperties } = require('../controllers/propertyController');
const protect = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');
const { getAllProperties, getPropertyById } = require('../controllers/propertyController');


router.post('/', protect, allowRoles('agent'), createProperty);
router.get('/', getProperties);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.get('/?location=...&minPrice=...&maxPrice=.', getProperties);



module.exports = router;
