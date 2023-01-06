import Nav from "./components/Nav"
import Main from "./components/Main";
import Card from "./components/Card";

function App() {
   const data = ['ram','shyaam','mohan','rohan','raju','kaju']
return(
    <>
    {/* <Nav/>
    <h1 className="text-danger" >Hi My App Function</h1>
    
    <Main/> */}

    {/* <Card name="Ram" info="You are RAm and your a good person" />
    <Card name="Shyaam" />
    <Card/>
    <Card/>
    <Card name="Shyaam"/>
    <Card name="RAJU" /> */}

   { data.map( (d) => <Card name ={d} info="Welcome to info" /> ) }
    



    {/* </Card> */}
</>)
}

export default App;