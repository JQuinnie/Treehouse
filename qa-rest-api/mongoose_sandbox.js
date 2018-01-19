'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

var db = mongoose.connection;

db.on('error', function (err) {
  console.error('connection error: ', err);
});

// when connection is ready to talk, only once fired
db.once('open', function () {
  console.log('db connection successful');
  // All database communication goes here

  var Schema = mongoose.Schema;
  var AnimalSchema = new Schema({
    type: {
      type: String,
      default: 'goldfish'
    },
    size: String,
    color: {
      type: String,
      default: 'golden'
    },
    mass: {
      type: Number,
      default: 0.007
    },
    name: {
      type: String,
      default: 'Anglea'
    }
  });

  // pre hook middleware on schema
  AnimalSchema.pre('save', function (next) {
    if (this.mass >= 100) {
      this.size = 'big';
    } else if (this.mass >= 5 && this.mass < 100) {
      this.size = 'medium';
    } else {
      this.size = 'small';
    }
    next();
  });

  // static method, called by a model
  AnimalSchema.statics.findSize = function (size, callback) {
    // this == Animal
    return this.find({
      size: size // this is the query object
    }, callback);
  }

  // instance method, called by a document
  AnimalSchema.methods.findSameColor = function (callback) {
    //this == document
    return this.model('Animal').find({
      color: this.color
    }, callback);
  }

  // mongoose object model
  var Animal = mongoose.model('Animal', AnimalSchema);

  var elephant = new Animal({
    type: 'elephant',
    color: 'gray',
    mass: 6000,
    name: 'Lawrence'
  });

  var animal = new Animal({}); //Goldfish, create generic by passing empty object

  var whale = new Animal({
    type: 'whale',
    mass: 190500,
    name: 'Fig'
  });

  var animalData = [{
      type: 'mouse',
      color: 'gray',
      mass: 0.035,
      name: 'Marvin'
    },
    {
      type: 'nutria',
      color: 'brown',
      mass: 6.35,
      name: 'Gretchen'
    },
    {
      type: 'wolf',
      color: 'gray',
      mass: 45,
      name: 'Iris'
    },
    elephant,
    animal,
    whale
  ]

  //dump the initial animal, elephant so there are no duplicates (structured due to async without using promises)
  Animal.remove({}, function (err) {
    if (err) console.error(err);
    Animal.create(animalData, function (err, animals) {
      if (err) console.error(err);
      // read all big animals
      Animal.findOne({
        type: 'elephant'
      }, function (err, elephant) {
        elephant.findSameColor(function (err, animals) {
          if (err) console.error(err);
          animals.forEach(function (animal) {
            console.log(animal.name + ' the ' + animal.color + ' ' + animal.type + ' is a ' + animal.size + '-sized animal.');
          });
          db.close(function () { //closed on the callback due to async
            console.log('db connection closed');
          });
        });
      });
    });
  });
});