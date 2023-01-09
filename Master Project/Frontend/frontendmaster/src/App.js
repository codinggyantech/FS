
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import './App.css';
import Nav  from "./components/Nav"
import Home from "./components/Home"
import AddEmployee from "./components/AddEmployee"
import EditEmployee from "./components/EditEmployee"

function App() {
  return (
   <>
   
  <Router>
  <Nav/>
  
    <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/add"  element={<AddEmployee/>} />
    <Route path="/edit/:id" element={<EditEmployee/>} />

    </Routes>
    
    

  </Router>
   </>
  );
}

export default App;
