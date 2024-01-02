const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  description: String,
  completed: { type: Boolean, default: false },
  userId: String,
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports={
  Todo
}