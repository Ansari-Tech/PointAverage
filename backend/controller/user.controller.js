const userModel = require('../model/user.model.js');
const db = require('../database.js');

//list all users
exports.users= function(req, res) {
    userModel.getUsers((response) => {
        console.log(response);
        res.send(response);
    });
};

//create a user
exports.create = function(req, res) {
    userModel.createUser(req.query, (response) => {
        res.send(response);
    });
};