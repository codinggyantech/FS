import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Product from './components/Product';

function App() {

  const[data,setData] = useState(0);
  const[show,setShow] = useState(true)

  // let data = 0;

  // function incmentdata(){
     
    
  //   setData(data+1)

  // }

  return (
   <>
   Hello World 
   {/* <h1>{data}</h1> */}

   {/* <button onClick={()=>setData(data+5)}>Inc</button>
   <button onClick={()=>setData(data-1)}>DEc</button> */}
  {/* <button onClick={()=>setShow(!show)}>show or hide</button> */}
  {/* {
    show &&  <About/>
  } */}
 
 <div className='conatiner d-flex flex-wrap'>
 <Product/>

 </div>
  
   </>
  );
}

export default App;
