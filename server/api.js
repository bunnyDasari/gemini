const express = require("express")
const mongooseData = require("./db")
const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/login",(req,res)=>{

})

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})