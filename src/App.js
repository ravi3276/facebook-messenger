import './App.css';
import React,{ useState, useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Msg from './Msg';

function App() {
  const [input, setInput]=useState("");
  const [message,setMessage]=useState(
    [
      {username:'ravi',text:"heyyy"},
      {username:'ram',text:"heyyy"}
    ]);
  const [username,setUsername]=useState("");


  function sendMessage(event) {
    event.preventDefault();
      setMessage([...message,{username:username,text:input}])
      setInput("");
  }
  // console.log(input);
  // console.log(message);

  useEffect(() => {
       setUsername(prompt("please enter your name"));
  },[])

  return (
    <div className="App">
      <h1>facebook-messenge----- 🚀 </h1>
      <h2> welocome {username} </h2>
      <form>

      <FormControl>
     <InputLabel>Enter a message...</InputLabel>
   
     <Input value={input} onChange={event =>setInput(event.target.value)} type="text"/>
   
    <Button disabled={!input} variant="contained" color="primary" value="submit" onClick={sendMessage}>
      send msg
   
      </Button>
    </FormControl>
      </form>

      {
        message.map(msg=>(
          // passing msg to Msg component as a props
          <Msg username={msg.username} text={msg.text}/>
        ))
      }
    </div>
  );
}

export default App;
