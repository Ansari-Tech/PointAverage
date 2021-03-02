const express = require('express');
const router = express.Router();

const  gradebookController = require('../controller/gradebook.controller.js');
    

//router.get('/', gradebookController.getGradebooks);
router.get('/get/', gradebookController.getGradebooks);
//router.post('/create/', gradebookController.create);
//router.post('/add_year', gradebookController.addYear);
//router.post('/add_semester/', gradebookController.addSemester);
//router.post('/add_course/', gradebookController.addCourse);

module.exports = router;
