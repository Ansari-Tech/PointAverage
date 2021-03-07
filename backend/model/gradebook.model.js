const db = require('../database.js');

exports.getGradebooks = function (user, response) {
   const sql = `select * from gradebooks where user='${user}';`;
    let res = {};
    let params = [];
    db.get(sql, params, function(err, rows) {
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


exports.createGradebook = function (query, response) {
   const sql = `insert into gradebooks (user, school) values ('${query.user}', '${query.school}');`;
    let res = {};
    let params = [];
    db.get(sql, params, function(err, rows) {
        if(err) {
            res = {"error": err.message};
            console.log(res);
            return res;
        }
        res = {
            "message": "success",
            "data": rows 
        }
        response(res);
    });
}
exports.getSemester= function (id, response) {
   const sql = `select * from semesters where id='${id}';`;
    let res = {};
    let params = [];
    db.get(sql, params, function(err, rows) {
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