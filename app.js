const express = require("express");
const app = express();
const path = require("path")

app.listen(3050,()=>{
    console.log("Funcionando")
})
app.use(express.static("public"));

app.get("/home",(req,res)=>{
     res.sendFile(path.join(__dirname,"./views/home1.html"))
 })

 app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})