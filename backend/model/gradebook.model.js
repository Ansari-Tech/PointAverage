const db = require('../database.js');
const md5 = require('md5');

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
