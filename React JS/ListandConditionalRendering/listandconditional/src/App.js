import React from 'react'
import MyProduct from './component/MyProduct';
import Profile from './component/Profile'
import data from "./data/data"
const App = () => {
    // console.log(data)
    const ishowing = "showing value";

// if(ishowing){
//     return (
//         <>
//         <div>App Component</div>
//         {/* <Profile/>
//         <Profile/>
//         <Profile/> */}
    
//        {
//         ishowing ? <>
//          {
//             data.map(d => <Profile data = {d} />)
//         }
        
        
        
//          </>: <>dont show data</>
//        }
    
       
        
        
//         </>
//       )
// }

// else{
//     return(
//         <>We cannot Show you Data</>
//     )
// }


return(
    <>
    Hello World
    <MyProduct name="Phone" battertime = "234" shwoing = {ishowing} />
    <MyProduct name="Laptop" battertime = "234" />
    <MyProduct name="Mobile" battertime = "234" />
    {
             data.map((d,index) => <Profile key={index} data = {d} />)
         }
    </>
)
 
}

export default App