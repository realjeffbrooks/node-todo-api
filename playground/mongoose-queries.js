const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59c06a7d4de10c54e7d0442a11';

if (!ObjectID.isValid(id)) {
  console.log('id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   completed: true
// }).then((todo) => {
//   console.log('Todo by completed true', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todo found by id', todo);
}).catch((e) => console.log(e));