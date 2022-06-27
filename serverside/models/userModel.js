const mongoose= require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:12,
    },
    password:{
        type:String,
        required:true,
        minLength:5,
    }
})

userSchema.pre("save",async function(){
    const salt=await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
})
const userModel= mongoose.model('User',userSchema)
module.exports=userModel