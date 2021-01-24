import './App.css';
import React,{ useState, useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Msg from './Msg';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput]=useState("");
  const [messages,setMessages]=useState(
    [
      // {username:'ravi',message:"heyyy"},
      // {username:'ram',message:"heyyy"}
    ]);
  const [username,setUsername]=useState("");


  useEffect(() => {
    //onSnapshot is like snapshot anytime when there is some change in db it will pull all out in variable snapshot below

    //snapshot.map get all docs loop through them and give each document data and it would be object

    //orderby timestamp recent things will come at top
    
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    });
  },[])


  useEffect(() => {
    setUsername(prompt('Please enter name: '))
  },[])
  
  const sendMessage = (event) => {
    event.preventDefault(); //will not refresh
    db.collection('messages').add({
      message: input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
      //serverTimezone which location we selected to host our database
    })
    setInput("");
  };

  return (
    <div className="App">

    <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt="facebook-messenger"/>

      <h1>facebook-messenge----- 🚀 </h1>
      <h2> welocome {username} </h2>
      <form className="app__form">

      <FormControl className="app__formControl">
   
     <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event =>setInput(event.target.value)} type="text"/>
   
      <IconButton disabled={!input}
       variant="contained"
        color="primary"
         type="submit"
          onClick={sendMessage}
          className="app__button"
          >
          <SendIcon />
      </IconButton>
      {/*
      
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          send msg
          </Button>
      */}

    </FormControl>
      </form>


      <FlipMove>
      {
        messages.map(({id,message})=>(
          // passing msg to Msg component as a props
          <Msg key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
