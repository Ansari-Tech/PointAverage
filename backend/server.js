// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//------------------------Routes-----------------------------------

const defaultRoutes = require('./routes/default.routes.js');
const userRoutes = require('./routes/user.routes.js');
const gradebookRoutes = require('./routes/gradebook.routes.js');

app.use('/', defaultRoutes);
app.use('/users/', userRoutes);
app.use('/gradebooks/', gradebookRoutes);


//-----------------------------------------------------------------


// listen on port 
app.listen(config.serverport, () => {
    console.log("Server is listening on port " + config.serverport);
});

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });