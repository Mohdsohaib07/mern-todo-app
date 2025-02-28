const {Todo} = require('../model/todoData');

 const get = async (req,res)=>{
    console.log(req.method);
 const todo = await Todo.find();
 res.json(todo);
}

 const post = async (req,res)=>{
    console.log(req.method);
    console.log(req.body.itemName);
    let todo = new Todo({itemName:req.body.itemName});
    await todo.save();
    const todos = await Todo.find();
    console.log(todos);
    
    res.json(todos);
}

 const put =  async (req,res)=>{
    await Todo.findOneAndReplace({_id:req.params.id},{itemName:req.body.itemName});
    const Editedtodos = await Todo.find();
    console.log(Editedtodos);
    res.json(Editedtodos);
}

 const deletee = async (req,res)=>{
    console.log(req.method);
    console.log(req.params.id);
    
  await Todo.findOneAndDelete({_id:req.params.id}),
  function(err,doc){
    if(err){
        console.log(err);  
    }
    console.log(doc);
  }
  res.json({message:'deleted'});
}
 const deleteAll = async (req,res)=>{
   console.log(req.method);
   
   await Todo.deleteMany({});
   res.json({message:'all deleted'});
 }
exports.get=get;
exports.post=post;
exports.put=put;
exports.deletee=deletee;
exports.deleteAll=deleteAll;