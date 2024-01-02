const express=require("express")
const { authenticate } = require("../middleware/authentication")
const { createTodo, getTodoList, updateTodo, deleteTodo, getAllTodo } = require("../controllers/todoController")
const todoRouter=express.Router()


todoRouter.post("/createTodo",authenticate,createTodo)
todoRouter.get("/getTodoList",authenticate,getTodoList)
todoRouter.put("/updateTodo/:id",authenticate,updateTodo)
todoRouter.delete("/deleteTodo/:id",authenticate,deleteTodo)
todoRouter.get("/getAllTodo",authenticate,getAllTodo)

module.exports={
    todoRouter
}