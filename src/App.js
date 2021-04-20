
import { FormControl,InputLabel,Button,Input } from '@material-ui/core';
import './App.css';
import { useEffect,useState } from "react";
import Message from './Container/Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase/app';

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
    window.scrollTo(0, 999999999999);
    db.collection("messages").add({
      username:userName,
      message:userInput,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    
    })
    setUserInput('');

  }
  return (
    <div className="App">
    <h2>Welcome {userName}</h2>
    <img 
    src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
    alt="Logo"/>
     <FlipMove>
     {
   userMessages.map((message)=>{
     return <Message  key={message.timestamp} message={message} userName={userName}/>
   })
 } 
  </FlipMove>
    
    <form className="app_form">    <FormControl>
  <InputLabel htmlFor="my-input">Type</InputLabel>
  <Input id="my-input" 
  aria-describedby="my-helper-text"
  value={userInput}
  onChange={(event)=> setUserInput(event.target.value)}
   />
  <Button variant="contained"
  type="submit"
  color="primary"
  className="app_Button"
  onClick={submitHandler}
  disabled={!userInput}
  href="#contained-buttons" > Send Message</Button>

 </FormControl>
 </form>
 
     
    </div>
  );
}

export default App;
