const express=require("express")
const bodyParser=require("body-parser")
const jwt=require("jsonwebtoken")
const rateLimit=require("express-rate-limit")
const morgan=require("morgan")
const helmet=require("helmet")
const { userRouter } = require("./routes/userRoutes")
const { connection } = require("./config/db")
const { todoRouter } = require("./routes/todoRoutes")
const app=express()
require("dotenv").config()


app.use(bodyParser.json())
app.use(express.json())
app.use(rateLimit({
    windowMs:1*60*100,
    max:10,
}))


app.use(morgan('combined'))
app.use(helmet())

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Charitism Backend Assigment By Prashant</h1>")
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