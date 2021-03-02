const express = require('express');
const router = express.Router();

const defaultController = require('../controller/default.controller.js');
    
router.get('/', function (req, res) {
    res.send('Welcome to PointAverage API');
});

module.exports = router;