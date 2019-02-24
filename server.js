//install this first npm install --save express body-parser cors mongoose
//this is the service which will run from node js
//run npm install nodemon --save-dev to install and act as server
//run with nodemon server to start listening to port 4000
//http://localhost:4000/games/find/utas       //this url to show JSON data on the broswer create by this server route

const gameRoutes = require('./routes/game.route');


const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose')

    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://node3:jd3@localhost:27017/erwin",{ useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/games', gameRoutes);

    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
