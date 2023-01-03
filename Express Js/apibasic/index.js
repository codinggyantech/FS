const bodyParser = require("body-parser")
const express = require("express")
const port = 3000
const app = express()

app.use(bodyParser.json());
app.use(express.json())

let data = [1,2,34,54];

app.get("/",(req,resp)=>{
    resp.status(200).json({
        "message":"success",
        "data": data
    })
})

app.post("/",(req,resp)=>{
    console.log(req.body)
    console.log(req.body.number)
    data.push(req.body.number)
    resp.status(201).json({
        "message":"data added",
        "data":data
    })
})


app.delete("/",(req,resp)=>{

    data.pop()
    resp.status(200).json({
        "message":"number deleted successfully"
    })
})


app.listen(port,()=>{
    console.log("your server is running on port ",port)
})
