const templateController = require('../model/template.model.js');

//get template 
exports.getTemplate = function(req, res) {
    templateController.getTemplate(req.query, (response) => {
        console.log(response);
        res.send(response);
    });
};


//create template 
exports.createTemplate= function(req, res) {
    templateController.createTemplate(req.query, (response) => {
        console.log(response);
        res.send(response);
    });
};

