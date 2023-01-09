import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowEmpolyees from './ShowEmpolyees';

const Home = () => {
    const [students, setStudents] = useState();

    function getStudents() {
        // axios.defaults.baseURL = 'http://myurl';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get("http://localhost:3000/student", ).then(resp => setStudents(resp.data.students
        ))
        
    }
   
    useEffect(()=>{
        getStudents()
    },[])
    // console.log(employee)


    

    return (
        <>
            <h1 className='text-center'>Show Students</h1>
            <div className="container d-flex  flex-wrap">
            {
                students?.map((student)=> <ShowEmpolyees student={student}/>)
            }

        </div>
        </>
    )
}

export default Home