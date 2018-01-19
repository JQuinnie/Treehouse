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
    size: {
      type: String,
      default: 'small'
    },
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
  // mongoose object model
  var Animal = mongoose.model('Animal', AnimalSchema);

  var elephant = new Animal({
    type: 'elephant',
    size: 'big',
    color: 'grey',
    mass: 6000,
    name: 'Lawrence'
  });

  var animal = new Animal({}); //Goldfish, create generic by passing empty object

  var whale = new Animal({
    type: 'whale',
    size: 'big',
    mass: 190500,
    name: 'Fig'
  });

  //dump the initial animal, elephant so there are no duplicates (structured due to async without using promises)
  Animal.remove({}, function (err) {
    if (err) console.error(err);
    elephant.save(function (err) {
      if (err) console.error(err);
      animal.save(function (err) {
        if (err) console.error(err);
        whale.save(function (err) {
          if (err) console.error(err);
          // read all big animals
          Animal.find({
            size: 'big'
          }, function (err, animals) {
            animals.forEach(function (animal) {
              console.log(animal.name + ' the ' + animal.color + ' ' + animal.type);
            });
            db.close(function () { //closed on the callback due to async
              console.log('db connection closed');
            });
          });
        });
      });
    });
  });
});