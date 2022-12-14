const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cros = require('cors')
const app = express();
//Using Middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(cros())


//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true }).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>console.log(err));


//Mongo Db SChema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    isActive: Boolean

})
const Student = mongoose.model('students', studentSchema);

//Routes
app.get("/", (req, res)=>{
    res.send("Hello World");
})
// Create the Student..
app.post("/student", async (req, res)=>{
    console.log(req.body)
    
    const student = new Student(req.body);
    await student.save();

    return res.status(201).json({
        success: true,
        student,
        message: "student created successfully"
    })
})

// Get all Studnet:
app.get("/student",async (req, res)=>{
    const students = await Student.find();
    return res.status(200).json({
        success: true,
        message: "All students",
        students
       
    })

})
// update a specific studnet:
app.put("/student/:id", async (req, res)=>{
    const stu = await Student.findById(req.params.id);
    
    if(!stu){
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
    } 
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.status(200).json({
        success: true,
        message : "student updated successfully",
       
    })
})

app.get("/student/:id", async (req, res)=>{
    const stu = await Student.findById(req.params.id);
    
    if(!stu){
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
    } 
    // const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.status(200).json({
        success: true,
        message : "student details are fetched successfully",
        stu
       
    })
})

app.delete("/student/:id", async (req, res)=>{
    const stu = await Student.findById(req.params.id);
    console.log(stu);
    if(!stu){
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
    } 
     stu.remove();
    return res.status(200).json({
        success: true,
        message : "student deleted successfully",
        stu
    })
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});