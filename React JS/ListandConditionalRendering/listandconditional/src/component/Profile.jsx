import React from 'react'

const Profile = ({data}) => {
    
  return (
   <>
   <h1>Profile</h1>
   <ol>
    <li>Name:{data.name}</li>
    <li>Age: {data.age} </li>
   </ol>
   
   </>

  )
}

export default Profile