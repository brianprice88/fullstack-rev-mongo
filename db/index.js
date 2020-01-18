var mongoose = require('mongoose');
var todoSchema = require('./schema.js');
var mongoURI = 'mongodb://localhost/review';
// allow use of es6 promises
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above
var db = mongoose.connect(mongoURI)
  .then(() => console.log('connected to Mongo'))

// define the model
var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;