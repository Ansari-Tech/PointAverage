const gradebookModel = require('../model/gradebook.model.js');
const db = require('../database.js');

//get gradebooks 
exports.getGradebooks = function(req, res) {
    gradebookModel.getGradebooks(req.query.user, (response) => {
        console.log(response);
        res.send(response);
    });
};
