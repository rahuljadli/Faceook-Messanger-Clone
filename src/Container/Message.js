import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import classes from './Message.module.css';

export default function Message(props) {
    const isUser=props.userName==props.message.userName;
    console.log("Is user",isUser)
    return (
        // Below part is like only if condition
        <div className={` ${classes.message} ${isUser && classes.message_user_card }`}>
        <Card  >
        {/* 
        // Below part is like  if-else condition */}
      <CardContent className={isUser ? classes.message_user: classes.message_guest}>
       
        <Typography color="white"
        variant="h5"
        component="h2">
         {props.message.userName}:{props.message.message}
        </Typography>
       
      </CardContent>
    </Card>
    </div>
    )
}
