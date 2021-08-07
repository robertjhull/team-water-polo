const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  createColumn
} = require('../controllers/column');

router.route('/').post(protect, createColumn);

module.exports = router;