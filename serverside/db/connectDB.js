const mongoose=require('mongoose')

const Connect=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("database connected"))
    .catch((e)=>console.log(e.message))
}
module.exports=Connect