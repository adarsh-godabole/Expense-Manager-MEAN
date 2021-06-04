//importing mods//
var express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const route = require('./routes/route')

var app = express();

mongoose.connect('mongodb://localhost:27017/expenselist');
mongoose.connection.on("connected", () => {
    console.log("Connected to Mongodb at 27017");
})
mongoose.connection.on("error", (err) => {
    if (err) {
        console.log("ERROR IN CONNECTING " + err);
    }
    console.log("Connected to Mongodb at 27017");
})

var port = 3000;

app.use('/api', route)

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('foobar')
})

app.listen(port, () => {
    console.log("server started at port " + port);
});