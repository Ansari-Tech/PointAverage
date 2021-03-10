const gradebookModel = require('../model/gradebook.model.js');

//get gradebooks 
exports.getGradebooks = function(req, res) {
    gradebookModel.getGradebooks(req.query.user, (response) => {
        console.log(response);
        res.send(response);
    });
};


//create gradebook
exports.createGradebook= function(req, res) {
    gradebookModel.createGradebook(req.query, (response) => {
        console.log(response);
        res.send(response);
    });
};

//get semesters 
exports.getSemester= function(req, res) {
    gradebookModel.getSemester(req.query.semesterID, (response) => {
        console.log(response);
        res.send(response);
    });
}