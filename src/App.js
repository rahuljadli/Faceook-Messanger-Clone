
import { FormControl,InputLabel,Button,Input } from '@material-ui/core';
import './App.css';
import { useEffect,useState } from "react";
import Message from './Container/Message';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [userInput,setUserInput]=useState('')
  
  const [userMessages,setUserMessages]=useState([])
  const [userName,setUserName]=useState('')

  useEffect(()=>{
    setUserName(prompt("Enter Your Name"))
  },[])


  // For fetching messages from the server
  useEffect(()=>{
db.collection("messages").
orderBy("timestamp","asc").onSnapshot(snapshot=>{
  setUserMessages(snapshot.docs.map(doc=>doc.data()))
})


  },[])
  const submitHandler=(event)=>{
    event.preventDefault();

    db.collection("messages").add({
      username:userName,
      message:userInput,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    
    })
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
