import Form from './Form'
import Display from './Display/index.js'
import {useState} from "react"

function App() {
const [value,setvalue]=useState(1)

 function  handleChange(event){
   setvalue(event.target.value)
  }
  function submitButton(event){
    event.preventDefault();
  
  }

  return (
    <>  
    <Form submitButton={submitButton}  handleChange={handleChange} value={value} />
        <Display value={value} />
       
    
     </>
  );
}

export default App;
