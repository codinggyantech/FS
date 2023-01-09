import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShowEmpolyees = ({student,emp}) => {
    console.log(student)
    // award: '2', desg: 'SE', did: '1', dname: 'SEM', eid: 1
    const navigate =  useNavigate()
    const deleteEmp =(eid)=>{

        axios.delete(`http://localhost:3000/student/${eid}`).then((resp)=>{
            console.log(resp)
            alert("student delete succcess")
            navigate("/")
        })

    } 
    
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
        
                    <div className="card-body">
                        <h5 className="card-title"> EID : {student.name} {student.age}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">DESG : {student.isActive}</h6>
                        <p className="card-text">Student took the {student.course}</p>
                    
                        <Link to={`/edit/${student._id}`} className="card-link">Edit</Link>
                        <button className='btn btn-danger btn-sm' onClick={() => deleteEmp(student._id)} >Delete</button>
                    </div>
                </div>
  )
}

export default ShowEmpolyees