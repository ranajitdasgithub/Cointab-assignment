const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    Name:String,
    gender:String,
    Age:Number,
    City:String,
    State:String,
    Country:String,
    email:String,
    phone:String,
    Postcode:String,
    Pin:Number
})
const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}