
import { FormControl,InputLabel,Button,Input } from '@material-ui/core';
import './App.css';
import { useEffect,useState } from "react";
import Message from './Container/Message';

function App() {
  const [userInput,setUserInput]=useState('')
  
  const [userMessages,setUserMessages]=useState([{
    userName:"rohan",
    message:"Hi rahul"
  }])
  const [userName,setUserName]=useState('')

  useEffect(()=>{
    setUserName(prompt("Enter Your Name"))
  },[])


  const submitHandler=(event)=>{
    event.preventDefault();


    setUserMessages([...userMessages,{
      userName:userName,
      message:userInput
    }]);
    setUserInput('');

  }
  return (
    <div className="App">
    <form>    <FormControl>
  <InputLabel htmlFor="my-input">Type</InputLabel>
  <Input id="my-input" 
  aria-describedby="my-helper-text"
  value={userInput}
  onChange={(event)=> setUserInput(event.target.value)}
   />
  <Button variant="contained"
  type="submit"
  color="primary"
  onClick={submitHandler}
  disabled={!userInput}
  href="#contained-buttons" > Send Message</Button>

 </FormControl>
 </form>
 {
   userMessages.map((message)=>{
     return <Message  message={message} userName={userName}/>
   })
 }
     
    </div>
  );
}

export default App;
