const express = require('express');
const app = express();
const gameRoutes = express.Router();

// Require Game model in our routes module
let Game = require('../models/Game');

// Defined store route
gameRoutes.route('/add').post(function (req, res) {
  let game = new Game(req.body);
   game.save()
    .then(game => {
    res.status(200).json({'game': 'CoGamein added successfully'});
    console.log('data add');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
gameRoutes.route('/').get(function (req, res) {
   Game.find(function (err, games){
    if(err){
      console.log(err);
    }
    else {
      res.json(games);
    }
  });
});

// Defined find name route
gameRoutes.route('/find/:name').get(function (req, res) {
  let name = req.params.name;
  Game.findOne({name:name}, function (err, game){
      res.json(game);
  });
});


// Defined edit route
gameRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Game.findById(id, function (err, game){
      res.json(game);
  });
});

//  Defined update route
gameRoutes.route('/update/:id').post(function (req, res) {
   Game.findById(req.params.id, function(err, game) {
    if (!game)
      return next(new Error('Could not load Document'));
    else {
      game.name = req.body.name;
      game.price = req.body.price;

      game.save().then(game => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
gameRoutes.route('/delete/:id').get(function (req, res) {
   Game.findOneAndDelete({_id: req.params.id}, function(err, game){
        if(err) res.json(err);
        else { res.json('Successfully removed');
        console.log('data delete');}
    });
});

module.exports = gameRoutes;
