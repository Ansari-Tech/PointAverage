const express = require('express');
const router = express.Router();

const  semesterController = require('../controller/semester.controller.js');
    

router.get('/get/', semesterController.getTemplate);
router.post('/create/', semesterController.createTemplate);

module.exports = router;
