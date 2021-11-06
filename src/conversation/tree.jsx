import React from 'react';

const project = [
  {
    id: 'project-terms',
    message: 'Right now I only take on paid work, charged by the hour.',
  },
  {
    message: 'Would that work for you?',
    replies: [
      {
        message: 'Sure!',
        to: 'project-acceptance',
      },
      {
        message: 'I meant for something full-time',
        to: 'hire',
      },
      {
        message: 'Not exactly...',
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'project-acceptance',
    message: 'Cool, thanks for understanding.',
  },
  {
    message: "I'll set expectations upfront: my current rate is $250 per hour.",
  },
  {
    message:
      'Obviously, different projects can take very different amounts of time to do.',
  },
  {
    message:
      'For example, a custom music generator can take ~10 hours, not including a website.',
  },
  {
    message:
      'I can give you a rough estimate once I understand what you have in mind.',
  },
  {
    message: 'How does that sound?',
    replies: [
      {
        message: 'Sounds good to me!',
        to: 'hire',
      },
      {
        message: "That probably won't work for me",
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'hire',
    message: () => (
      <>
        Great! Send the details to{' '}
        <a href="mailto:hire@alexbainter.com">hire@alexbainter.com</a> to get
        started.
      </>
    ),
  },
  {
    message:
      "Please explain in your email what you're thinking of and how I might be able to help you; don't just ask me to call you.",
  },
  {
    message: '(not trying to be a dick, I just really prefer email over calls)',
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
    message: "I might not respond but I'll check it out.",
    to: 'anything-else',
  },
];

const mainReplies = [
  {
    message: 'I was thinking we could work together',
    to: 'project-terms',
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
    message: 'You should sell NFTs!',
    to: 'nfts',
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
        <a href="mailto:hello@alexbainter.com">hello@alexbainter.com</a>.
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
    id: 'nfts',
    message:
      "Thanks for the suggestion! I'm considering it but that's all I have to say for now.",
    to: 'anything-else',
  },
  {
    id: 'no-calls',
    message: "Sorry, I don't have the energy to call everyone who asks me.",
  },
  {
    message:
      'If you want to discuss something, please include all the details in an email.',
    to: 'anything-else',
  },
]
  .concat(project)
  .concat(licensing)
  .concat(showAndTell);

export default tree;
