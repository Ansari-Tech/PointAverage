const db = require('../database.js');

exports.getTemplate = function (req, response) {
   const sql = `select * from template;`;
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


exports.createTemplate = function (query, response) {
   const sql = `insert into template( ) values ( );`;
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
