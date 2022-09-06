const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
    Number:{type:String,required:true},
    EmailId:{type:String,required:true},
},
{
    timestamps:true,
    versionkey:false


})
module.exports=mongoose.model("user",userSchema)