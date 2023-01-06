import React from 'react'

const MyProduct = ({name,battertime,shwoing}) => {


  return (
    <>
   --{shwoing}
    <h1> Product {name}</h1>
    <p>{battertime}</p>
    {/* <div>{JSON.stringify(props)}</div> */}
   
    </>
  )
}

export default MyProduct