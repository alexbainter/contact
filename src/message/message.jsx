import React from 'react';
import classnames from 'classnames';
import classes from './message.module.scss';

const Message = ({ children, isReply, hasAuthor }) => {
  return (
    <div
      className={classnames(classes['message'], {
        [classes['message--is-reply']]: isReply,
      })}
    >
      {hasAuthor && (
        <div className={classes['message__author']}>
          {isReply ? 'You' : 'Alex'}
        </div>
      )}
      <div className={classes['message__content']}>{children}</div>{' '}
    </div>
  );
};

export default Message;
