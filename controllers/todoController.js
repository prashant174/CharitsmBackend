const { Todo } = require("../models/todo.model")



const createTodo=async(req,res)=>{
    try{
       const {description,completed}=req.body
       const {userId}=req.body

       const todo=new Todo({description,completed,userId})
       await todo.save()
       res.status(201).send({msg:"Todo created successfully"})

    }catch(err){
        console.log(err)
        res.status(500).send({msg:"Something went wrong please try again later",})
    }
}

const getTodoList=async(req,res)=>{
    try{
        const {userId}=req.body

        const todoList= await Todo.find({userId})

        if(todoList.length==0){
            res.status(400).send({msg:"No todo found "})
        }
        else{
        res.status(200).send({msg:"Todolist fetched successfully",todoList:todoList})
        }
    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again later",})
    }
}

const updateTodo=async(req,res)=>{
    try{
        const {userId}=req.body
        const {id}=req.params
        const payload=req.body

        const todo = await Todo.findById(id)

    if (!todo) {
      return res.status(404).json({ message: 'TODO not found' })
    }

    if (todo.userId !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this TODO' })
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, payload, { new: true })
    res.status(201).send({msg:"Todo updated successfully",updatedTodo:updateTodo});
        
    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again later"})
    }
}

const deleteTodo=async(req,res)=>{
    try{
       const {id}=req.params
       const {userId}=req.body

       const todo = await Todo.findById(id)

       if (!todo) {
         return res.status(404).json({ message: 'TODO not found' })
       }
   
       if (todo.userId !== userId) {
         return res.status(403).json({ message: 'Not authorized to update this TODO' })
       }
   
       const updatedTodo = await Todo.findByIdAndDelete(id)
       res.status(200).send({msg:"Todo Deleted successfully"});

    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again later"})
    }
}

const getAllTodo=async(req,res)=>{
    try{
        const todo=await Todo.find()
        res.status(200).send({msg:"All Todo fetched successfully",Todo:todo})
    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again later"})
    }
}

module.exports={
    createTodo,
    getTodoList,
    updateTodo,
    deleteTodo,
    getAllTodo
}
