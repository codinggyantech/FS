import React from 'react'

const Card = ({name,info}) => {
    const date = new Date();
  return (
    <>
    <div className="card m-2" >
  <div className="card-body">
    <h5 className="card-title">{name || "Guest"}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">{info ||" No info found"}</p>
    <a href="#" className="card-link">{date.toString()}</a>
   
  </div>
</div>
    
    
    
    </>
  )
}

export default Card