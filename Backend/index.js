const express=require("express")
const axios = require('axios');
const cors = require("cors");
require("dotenv").config()
let port=process.env.PORT


const {connection}  = require("./Config/db")
const app=express()

app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This is homepage")
})
app.get("/userfetch",(req,res)=>{
    axios.get("https://randomuser.me/api/?results=50")
    .then((respo)=>{
          //console.log(respo.data.results)
          res.send(respo.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
})


app.listen(port,async ()=>{
    try{
        await connection
        console.log("Connected to db successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server started at ${port}`)
})