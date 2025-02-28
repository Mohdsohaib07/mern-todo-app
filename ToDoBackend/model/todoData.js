const mongoose = require('mongoose');

const {Schema}= mongoose;

const TodoSchema = new Schema({
    itemName:{type:String,required:true}
});


 const Todo = mongoose.model('Todo',TodoSchema);

exports.Todo= Todo;