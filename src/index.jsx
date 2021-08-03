import { render } from 'react-dom';
import React from 'react';
import Header from './header/header.jsx';
import Conversation from './conversation/conversation.jsx';
import './base.scss';

const rootEl = document.getElementById('root');

render(
  <>
    <Header />
    <Conversation />
  </>,
  rootEl
);
