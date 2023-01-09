const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 9090
const mongoose = require('mongoose');
//Using Middleware
app.use(bodyParser.json());
app.use(express.json())
//Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
});

//Mongo Db SChema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    isActive: Boolean

})

const Student = mongoose.model('StudentCollection', studentSchema);




app.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>")
})

app.post("/", async (req, resp) => {
    const stud = new Student(req.body)
    await stud.save()
    console.log(req.body)
    resp.send("works..")
})

app.get("/students",async(req,resp)=>{
    const allstud = await  Student.find()
    console.log(allstud)
    resp.status(200).json({
        "status":"success",
        "students":allstud
    })


})


app.listen(port, () => {
    console.log("Your app runs at the port", port)

})