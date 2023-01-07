import React, { useEffect, useState } from 'react'

const Product = () => {
const [product,setproduct] = useState([])

const getProducts = ()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setproduct(json)
            })

}


useEffect(()=>{
getProducts()
},[])

  return (
    <>
    <div>Product</div>
{
    product?.map((pro,index)=>{
        return(
            <>
           <div className="container  w-25" key={index}>
           <div className="card m-2" >
  <img src={pro.image} className="card-img-top text-center" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{pro.title}</h5>
    <p className="card-text">{pro.description.substr(2,10)}.</p>
    <a href="#" className="btn btn-primary">Buy Now ${pro.price} </a>
  </div>
</div>
           </div>
            </>
        )

    })
}
</>
  )
}

export default Product