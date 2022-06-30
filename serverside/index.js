const express= require('express')
const app=express()
const ConnectDB=require('./db/connectDB')
require('dotenv').config()
const cors=require('cors')
const port= process.env.PORT || 4000;
const authRoutes=require('./routes/authRoutes')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials:true,
    
}))

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/',authRoutes)


const start=async()=>{
    await ConnectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log("app is listening on port 4000");
    })
}
start()
