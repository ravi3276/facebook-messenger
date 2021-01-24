import React ,{forwardRef} from 'react'
import { Card ,CardContent,Typography} from '@material-ui/core';
import "./Msg.css";

const Msg= forwardRef(({username,message},ref) => {
          // console.log(username);
          // console.log(message.username);
    const isUser=username===message.username;
      // console.log(isUser);
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'} `}>
        <Card >
          <CardContent className={isUser ? "message__userCard" : "message__guestCard"}>
             <Typography
             color="white"
             variant="h5"
             component="h2"
             >
             {message.username}:{message.message}
             </Typography>
          </CardContent>
        </Card>
        </div>
    )
})

export default Msg
