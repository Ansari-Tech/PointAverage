var db = require('../database.js');

exports.getUsers = function (response) {
   const sql = 'select * from user;';
    let res = {"message": "callback test"};
    let params = [];
    db.run(sql, params, function(err, rows) {
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

exports.createUser = function(params) {
    const sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)';
    let res;
    db.run(sql, params, function (err, result) {
        if (err){
            res = {"error": err.message};
            return res;
        }
        res = {
            "message": "success",
            "data": params,
            "id" : this.lastID
        };
        return res;
    });
}