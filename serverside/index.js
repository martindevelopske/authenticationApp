const express= require('express')
const app=express()
const ConnectDB=require('./db/connectDB')
require('dotenv').config()
const cors=require('cors')
const port= process.env.PORT || 4000;
const authRoutes=require('./routes/authRoutes')
const bodyParser=require('body-parser')

app.use(cors({
    origin:["https://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
    optionsSuccessStatus:200,
    origin:true
}))
app.use(bodyParser.json())
app.use('/',authRoutes)
app.use(express.json())

const start=async()=>{
    await ConnectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log("app is listening on port 4000");
    })
}
start()
