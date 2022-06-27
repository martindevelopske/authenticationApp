const userModel = require("../models/userModel")

const Login=async(res,req)=>{
   
}
const Register=async(req,res)=>{
    const {email,username,password}=req.body
   const user=await userModel.create({email,username,password})
   console.log(user);
}

module.exports={
    Login,
    Register
}