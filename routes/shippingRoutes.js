const express = require('express');
const {
  createShipping,
  getShipping,
  cancelShipping
} = require('../controllers/shippingControllers');
const verifySecret = require('../middleware/verifySecret');

const router = express.Router();

router.use(verifySecret);

router.post('/create', createShipping);
router.get('/get', getShipping);
router.put('/cancel', cancelShipping);

module.exports = router;