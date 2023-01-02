const express = require('express')
const app = express()
const port = 3000
const path = require("path")



// app.get("/",function(req,res){
//     res.send("Hello World ! <br/> hi working good")
   
// })

// app.get("/about",function(req,res){
//     res.send("<h1>you are in about page </h1>")
// })


app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname+'/home.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})