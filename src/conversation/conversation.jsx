import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Message from '../message/message.jsx';
import PendingMessage from '../message/pending-message.jsx';
import ReplySelector from '../reply-selector/reply-selector.jsx';
import tree from './tree.jsx';
import classes from './conversation.module.scss';

const FIRST_MESSAGE_DELAY = 1500;
const NEXT_MESSAGE_DELAY_PER_CHARACTER = 50;

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
  const [chatLog, setChatLog] = useState([]);
  const [hasPendingMessage, setHasPendingMessage] = useState(true);
  const ref = useRef(null);
  const currentReplies = chatLog.length && chatLog[chatLog.length - 1].replies;
  const handleReplySelect = (option) => {
    setChatLog((previous) =>
      previous.concat([Object.assign({}, option, { isReply: true })])
    );
    const messageBatch = getMessagesToNextPrompt(option.to);
    setHasPendingMessage(true);

    let nextMessageDelay = FIRST_MESSAGE_DELAY;
    messageBatch.forEach((message, i) => {
      setTimeout(() => {
        setChatLog((previous) => previous.concat(message));
        if (i === messageBatch.length - 1) {
          setHasPendingMessage(false);
        }
      }, nextMessageDelay);
      if (typeof message.message === 'string') {
        nextMessageDelay += Math.max(
          message.message.length * NEXT_MESSAGE_DELAY_PER_CHARACTER,
          FIRST_MESSAGE_DELAY
        );
        return;
      }
      nextMessageDelay += FIRST_MESSAGE_DELAY;
    });
  };
  useLayoutEffect(() => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }, [chatLog, hasPendingMessage, currentReplies]);
  useEffect(() => {
    setTimeout(() => {
      setChatLog([tree[0]]);
      setHasPendingMessage(false);
    }, FIRST_MESSAGE_DELAY);
  }, []);
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
      {hasPendingMessage && (
        <PendingMessage
          hasAuthor={
            chatLog.length === 0 || chatLog[chatLog.length - 1].isReply
          }
        />
      )}
      {!hasPendingMessage && Array.isArray(currentReplies) && (
        <ReplySelector
          options={currentReplies}
          onSelect={(selectedReply) => handleReplySelect(selectedReply)}
        />
      )}
    </div>
  );
};

export default Conversation;
