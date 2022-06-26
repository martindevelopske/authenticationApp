const mongoose=require('mongoose')

const Connect= async(url)=>{
    await mongoose.connect(url)
    .then(console.log("database connected"))
    .catch(
        console.log(e.message)
    )
}
module.exports=Connect