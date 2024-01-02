const express=require("express")
const { userRouter } = require("./routes/userRoutes")
const { connection } = require("./config/db")
const { authenticate } = require("./middleware/authentication")
const { todoRouter } = require("./routes/todoRoutes")
const app=express()
require("dotenv").config()
app.use(express.json())

app.get("/",authenticate,(req,res)=>{
    res.status(200).send("charitsm")
})

app.use("/",userRouter)
app.use("/",todoRouter)

const port=process.env.PORT||8080
app.listen(port,async()=>{
    try{
       await connection
       console.log("mongodb connected")
    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${port}`)
})