import React from 'react';

const NFT_EXPLANATION_URL =
  'https://alexbainter.notion.site/NFTs-b24610b8189b4be8865aa834293086d4';
const DONATE_URL = 'https://play.generative.fm/donate';

const project = [
  {
    id: 'project',
    message: 'Cool, maybe I can help you out',
  },
  {
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
        message: 'Not exactly...',
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'project-acceptance',
    message: 'Great!',
  },
  {
    message:
      'Just to set expectations upfront, what I do is a niche form of software engineering, and I charge accordingly.',
  },
  {
    message: 'My current rate is $125 per hour.',
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
      "I'd be happy to discuss what you had in mind and give you a rough estimate.",
  },
  {
    message: () => (
      <>
        Send the details to{' '}
        <a href="mailto:hire@alexbainter.com">hire@alexbainter.com</a> to get
        started.
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
    message: "I might not respond but I'll check it out.",
    to: 'anything-else',
  },
];

const mainReplies = [
  {
    message: 'I was thinking we could work together',
    to: 'project',
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
    message: 'Stay tuned...',
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
