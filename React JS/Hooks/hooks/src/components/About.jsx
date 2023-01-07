import React, { useEffect, useState } from 'react'


const About = () => {

    const[mystate,setMyState] = useState(0)

function oncomponentmount(){
    console.log("About component on Scrreen")
}
function oncomponentunmount(){
    console.log("About component unmounted from Scrreen")
}

function oncomponentupdate(){
    console.log("About component updating on Scrreen")
}


useEffect(() => {
    oncomponentmount()

  return () => {
    oncomponentunmount()
  }
}, [mystate])



  return (
    <>
    
    <div>About</div>

    {mystate}
    <button onClick={()=>setMyState(mystate+5)} >updatestate</button>
    </>
  )
}

export default About