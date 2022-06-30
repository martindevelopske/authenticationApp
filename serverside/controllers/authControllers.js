const userModel = require("../models/userModel")
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')

// const createToken=(id)=>{
//     return jwt.sign({id},"secret key",{
//         expiresIn: 3*24*60*60
//     })
// }

const Login= async(res,req,next)=>{
    const {email,password}=req.body
    try{
        const {email,password}= req.body;
        //console.log(email);
        const user= await userModel.findOne({password})
        //console.log(user);
    if(!user){
        return res.json({msg:"incorrect username or password", status:false})
        //console.log("user available");
    }
    const isPasswordValid= await bcrypt
    .compare(password, user.password)
    if(!isPasswordValid){
        return res.json({msg:"incorrect username or password",status:false});
    }
    delete user.password
    return res.json({status:true, user})
    }catch(e){
        console.log(e.message);
    }
    
}
const Register=async(req,res,next)=>{
    try{
        const {email,password,username}=req.body
        console.log(email);

    const usernameCheck= await userModel.findOne({username})
    if(usernameCheck){
        return res.json({msg:"username already in use", status:false})
    }
    const emailCheck= await userModel.findOne({email})
    if(emailCheck){
        return res.json({msg:"email is already in use",status:false})
    }

    const user=await userModel.create({
        email,
        username,
        password })
        return res.json({status:true,user})
    } catch(e){
        console.log(e.message);
    }
    
//    const token=createToken(user._id)
//    res.cookie("jwt",token,{
//        withCredentials:true,
//        httpOnly:false,
//    })
//    res.status(201).json({user:user._id,created:true})
//    console.log(user);
// console.log(email);
// }catch(e){
//     console.log(e.message)
//     const errors=handleErrors(e)
//     res.json({errors,created:false})
// }
}

module.exports={
    Login,
    Register
}