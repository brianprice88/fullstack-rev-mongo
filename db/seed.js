const mongoose = require('mongoose');
const Todo = require('./');
const seedData = require('./todos.json');

// Fill in the definition of insertSeedData so that when 
// this file is run in the terminal the mock data is inserted
var insertSeedData = function() {
  // create will take either an object or an array of objects
  Todo.create(seedData)
  .then(() => {
    console.log('database seeded');
    mongoose.connection.close();
  })
  .catch(err => console.error(err))
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertSeedData();