
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const navigate =  useNavigate()
    let initialState = {
       
        "name":"",
        "age":"",
        "course":"",
        "isActive":true
    }
    const[formData,setFormData] = useState(initialState)
    
    
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name] :e.target.value})
    
    }

    function addEmployee(){
        console.log("funciton works")
        // console.log(formData)

        axios.post("http://localhost:3000/student",formData).then((resp)=>
        {
console.log("success")
alert("student addded success")
navigate("/")
        }
        )
        console.log("success")

    }

  return (
    <>
    <h1 className="text-center">Add a Student</h1>
    <div className="container mt-4">
        
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="Student Name" />
            <label for="floatingInput">Student Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='age'
              value={formData.age}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="age" />
            <label for="floatingInput">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name='course'
              value={formData.course}
              onChange={(e)=>handleChange(e)}
              className="form-control"
              placeholder="name" />
            <label for="floatingInput">Courses</label>
          </div>
          
          <div className="form-floating mb-3">
            <button onClick={addEmployee}>Add Student</button>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default AddEmployee









 