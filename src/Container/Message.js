import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './Message.module.css';
import React, { forwardRef } from 'react';
const Message=forwardRef((props, ref) => {
    const isUser=props.userName===props.message.username;
  
    return (
        // Below part is like only if condition
        <div
        ref={ref} 
        className={` ${classes.message} ${isUser && classes.message_user_card }`}>
        <Card  >
        {/* 
        // Below part is like  if-else condition */}
      <CardContent className={isUser ? classes.message_user: classes.message_guest}>
       
        <Typography
        variant="h5"
        component="h2">
         {!isUser && `${props.message.username || "Unknown"}:` }{props.message.message}
        </Typography>
       
      </CardContent>
    </Card>
    </div>
    )
})
export default Message;
