const mongoose=require("mongoose")  
    const connect=()=>{
        return mongoose.connect("mongodb+srv://keshav:keshav@cluster0.ryt59.mongodb.net/yoursBackend")
    }
    module.exports=connect