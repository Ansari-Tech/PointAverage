const express = require('express');
const router = express.Router();

const  gradebookController = require('../controller/gradebook.controller.js');
    

//router.get('/', gradebookController.getGradebooks);
router.get('/get/', gradebookController.getGradebooks);
router.post('/create/', gradebookController.createGradebook);
router.post('/get_semester/', gradebookController.getSemester);
//router.post('/add_course/', gradebookController.addCourse);

module.exports = router;
