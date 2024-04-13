const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.use(express.json()); // Parse JSON request bodies

router.use('/auth', authController);

module.exports = router;
