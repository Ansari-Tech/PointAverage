const db = require('../database.js');
const md5 = require('md5');

exports.getUsers = function (response) {
   const sql = 'select * from user;';
    let res = {};
    let params = [];
    db.all(sql, params, function(err, rows) {
        if(err) {
            res = {"error": "err.message"};
            return res;
        }
        res = {
            "message": "success",
            "data": rows 
        }
        response(res);
    });
}

exports.createUser = function(query, response) {
    const sql ='INSERT INTO user (name, email, password) VALUES (?,?,?);';
    let res;
    const params = [query.name, query.email, md5(query.password)];
    db.run(sql, params, function (err, result) {
        if (err){
            res = {"error": err.message};
            console.log(err.message);
            response(res);
        }
        else {
            res = {
               "message": "success",
               "data": params,
               "id" : this.lastID
            };
            response(res);
        }
    });
}