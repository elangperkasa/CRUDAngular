  const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Game = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'games'
    ,     versionKey: false //to remove __V=0 in mongo document
});

module.exports = mongoose.model('Game', Game);
