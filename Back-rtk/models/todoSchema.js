const mongoose = require("mongoose")

const  todoSchema= mongoose.Schema({
    title: String,
  

})

module.exports = mongoose.model('Todo', todoSchema);
