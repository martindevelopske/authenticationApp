const express= require('express')
const app=express()
const ConnectDB=require('./db/connectDB')
require('dotenv')
const port= process.env.MONGO_URI || 4000;

app.get('/login',(req,res)=>{
    res.send("login page")
})
const start=async()=>{
    await ConnectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log("app is listening on port 4000");
    })
}
start()
