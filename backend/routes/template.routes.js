const express = require('express');
const router = express.Router();

const  templateController = require('../controller/template.controller.js');
    

router.get('/get/', templateController.getTemplate);
router.post('/create/', templateController.createTemplate);

module.exports = router;
