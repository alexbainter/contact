import React, { useState, useRef, useLayoutEffect } from 'react';
import Message from '../message/message.jsx';
import ReplySelector from '../reply-selector/reply-selector.jsx';
import tree from './tree.jsx';
import classes from './conversation.module.scss';

const MESSAGE_DELAY = 1000;

const getMessagesToNextPrompt = (startId) => {
  const startingIndex = tree.findIndex(({ id }) => id === startId);
  const nextBreakIndex = tree.findIndex(
    ({ replies, to }, i) => i >= startingIndex && (Array.isArray(replies) || to)
  );
  const messages = tree.slice(startingIndex, nextBreakIndex + 1);
  if (Array.isArray(messages[messages.length - 1].replies)) {
    return messages;
  }
  if (messages[messages.length - 1].to) {
    return messages.concat(
      getMessagesToNextPrompt(messages[messages.length - 1].to)
    );
  }
  throw new Error('Conversation tree is malformed');
};

const Conversation = () => {
  const [chatLog, setChatLog] = useState([tree[0]]);
  const ref = useRef(null);
  const currentReplies = chatLog[chatLog.length - 1].replies;
  const handleReplySelect = (option) => {
    setChatLog((previous) =>
      previous.concat([Object.assign({}, option, { isReply: true })])
    );
    const messageBatch = getMessagesToNextPrompt(option.to);
    messageBatch.forEach((message, i) => {
      setTimeout(() => {
        setChatLog((previous) => previous.concat(message));
      }, i * MESSAGE_DELAY);
    });
  };
  useLayoutEffect(() => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }, [chatLog]);
  return (
    <div className={classes.conversation} ref={ref}>
      {chatLog.map(({ message, isReply }, i) => (
        <Message
          key={i}
          isReply={isReply}
          hasAuthor={i === 0 || isReply || chatLog[i - 1].isReply}
        >
          {typeof message === 'function' ? message() : message}
        </Message>
      ))}
      {Array.isArray(currentReplies) && (
        <ReplySelector
          options={currentReplies}
          onSelect={(selectedReply) => handleReplySelect(selectedReply)}
        />
      )}
    </div>
  );
};

export default Conversation;
