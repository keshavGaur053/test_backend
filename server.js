const express=require("express")

const app=express()

const loginController=require("./Controller/userController")
app.use(express.json())  //expreress.json convert json body to js object

const connect=require("./config/db")
const cors =require("cors")
app.use(cors());
// const router=express.Router()

app.use("/",loginController)

app.listen(5000,async()=>{
console.log("listening at 5000")
    try {
      await connect()
    } catch (error) {
        console.log(error)
    } 
})