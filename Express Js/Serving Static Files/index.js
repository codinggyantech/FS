const express = require("express")
const port = 9090
const app = express()
const path = require("path")

// app.use(express.static('static'))
app.use('/static', express.static(path.join(__dirname, 'static')))

app.get("/",(req,res)=>{
    // res.send("<h1>Hi Welcome to Express Site </h1>")
    res.sendFile(path.join(__dirname+'/templates/index.html'))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname+"/templates/about.html"))
})

app.post("/data",(req,res)=>{
    res.send("success psot request")
})


app.listen(port,()=>{
    console.log("Your application is running on the port ",port)
})