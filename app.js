//importing mods//
//import modules 
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/expenseList');

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database @ 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("Error in db", err);
    }
})

//define port
const port = 3000;

//adding middlewear cors
app.use(cors());

//adding body-parser
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

//all urls with api/ to go to route.js file
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

//bind server with the port
app.listen(port, () => {
    console.log("Server started at port:" + port);
})