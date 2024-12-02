const express = require('express');
const {
  createShipping,
  getShipping,
  cancelShipping
} = require('../controllers/shippingControllers');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', createShipping);
router.get('/get', getShipping);
router.put('/cancel', cancelShipping);

module.exports = router;