import Footer from "./component/Footer"
import Home from "./component/Home"
import Nav from "./component/Nav"

function App() {
    const show = true;


    

    return (
        <>
            <Nav  />
            <h1 onc></h1>

            { show ? <Home/> :<Footer/>  }
           

        </>
    )


}
export default App


