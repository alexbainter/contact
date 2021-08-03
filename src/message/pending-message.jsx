import React from 'react';
import Message from './message.jsx';
import classes from './pending-message.module.scss';

const PendingMessage = (props) => {
  return (
    <Message {...props}>
      <div className={classes['pending-message']}>
        <div className={classes['pending-message__dot']}></div>
        <div className={classes['pending-message__dot']}></div>
        <div className={classes['pending-message__dot']}></div>
      </div>
    </Message>
  );
};

export default PendingMessage;
