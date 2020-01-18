var Todo = require('./');

var helpers = {
 get: () => Todo.find({}).sort({priority: 1}).limit(5), // finds all ({}), sort in ascending order (1), limit to 5
 post: (item) => Todo.create(item),
 put: (_id, priority) => Todo.findOneAndUpdate({_id}, priority),
 delete: (_id) => Todo.deleteOne({_id})
}
module.exports = helpers