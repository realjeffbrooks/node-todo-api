const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59c06a7d4de10c54e7d0442a11';

// Todo.remove({}).then((results) => {
//   console.log(results);
// });

Todo.findByIdAndRemove('59c1b7dd52e04914176b2852').then((todo) => {
  console.log(todo);
});

