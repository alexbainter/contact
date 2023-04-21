import React from 'react';

const RATE = 125;

const project = [
  {
    id: 'work-prompt',
    message: 'Like for a project or something full time?',
    replies: [
      {
        message: 'A project/part time',
        to: 'project-terms',
      },
      {
        message: 'Full time',
        to: 'hire-ft',
      },
    ],
  },
  {
    id: 'project-terms',
    message: 'Right now I only take on paid work. Would that work for you?',
    replies: [
      {
        message: 'Maybe!',
        to: 'hire',
      },
      {
        message: 'I was thinking more like a collab',
        to: 'collab',
      },

      {
        message: "I don't think so",
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'collab',
    message:
      "I'm sorry, I don't have the capacity to help others work on their ideas instead of working on my own or earning a living.",
  },
  {
    message:
      "The only possible exceptions would be for people I'm excited to work with, or very interesting projects.",
  },
  {
    message:
      "The best chance we have of working together is if you're able to hire me.",
    replies: [
      {
        message: "Fair enough, I'm open to hiring you.",
        to: 'collab-redirect',
      },
      {
        message: "I think you'll make an exception for me or my idea.",
        to: 'else',
      },
      {
        message: "I understand, but that won't work for me. Have a nice day!",
        to: 'anything-else',
      },
    ],
  },
  {
    id: 'collab-redirect',
    message: 'Great, thanks for understanding.',
    to: 'hire',
  },
  {
    id: 'hire',
    message: () => (
      <>
        Send me an email at{' '}
        <a href="mailto:hire@alexbainter.com">hire@alexbainter.com</a> to get
        started.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'hire-ft',
    message: () => (
      <>
        Send the details to{' '}
        <a href="mailto:jobs@alexbainter.com">jobs@alexbainter.com</a>.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'project-denial',
    message: "I understand, but I don't think I can help you. Sorry!",
    to: 'anything-else',
  },
];

const licensing = [
  {
    id: 'licensing',
    message: () => (
      <>
        Yep, check out{' '}
        <a href="https://record.generative.fm/licensing">
          record.generative.fm/licensing
        </a>
        .
      </>
    ),
    to: 'anything-else',
  },
];

const showAndTell = [
  {
    id: 'show-and-tell',
    message: () => (
      <>
        Send a link to{' '}
        <a href="mailto:showandtell@alexbainter.com">
          showandtell@alexbainter.com
        </a>
        .
      </>
    ),
  },
  {
    message: "I might not respond but I'll check it out!",
    to: 'anything-else',
  },
];

const mainReplies = [
  {
    message: 'I was thinking we could work together',
    to: 'work-prompt',
  },
  {
    message: 'Can I use your music for something?',
    to: 'licensing',
  },
  {
    message: 'I want to show you something cool',
    to: 'show-and-tell',
  },
  {
    message: 'Something else...',
    to: 'else',
  },
];

const tree = [
  {
    message: "Hey what's up?",
    replies: mainReplies,
  },
  {
    id: 'else',
    message: () => (
      <>
        Send an email to{' '}
        <a href="mailto:hello@alexbainter.com">hello@alexbainter.com</a>, but
        please understand if I don't respond.
      </>
    ),
    replies: [
      {
        message: 'Thanks!',
        to: 'anything-else',
      },
      {
        message: 'I think a call might be better',
        to: 'no-calls',
      },
    ],
  },
  {
    id: 'anything-else',
    message: 'Anything else?',
    replies: mainReplies,
  },
  {
    id: 'no-calls',
    message:
      'Sorry, but random calls with strangers (no offense!) drain my energy.',
  },
  {
    message:
      'If you want to discuss something, please put it all in an email and allow me time to respond thoughtfully.',
    to: 'anything-else',
  },
]
  .concat(project)
  .concat(licensing)
  .concat(showAndTell);

export default tree;
