import React from 'react';

const nft = [
  {
    id: 'nft-check',
    message: 'Let me guess... something something NFTs?',
    replies: [
      {
        message: "Yeah how'd you know?",
        to: 'nft-terms',
      },
      {
        message: 'Uhh... no?',
        to: 'no-nft',
      },
    ],
  },
  {
    id: 'nft-terms',
    message: 'Lucky guess...',
  },
  {
    message: "So here's the deal: I'm not interested in making or selling NFTs",
  },
  {
    message:
      "I'm happy to build software that generates tokenizable output, but I don't want to be involved with selling it.",
  },
  {
    message: 'Is that an arrangement that could work for you?',
    replies: [
      {
        message: 'Sure!',
        to: 'project-terms',
      },
      {
        message: 'Not really...',
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'no-nft',
    message: 'Oh thank god...',
    to: 'project-terms',
  },
];

const project = [
  {
    id: 'project-terms',
    message:
      "So I don't really have the energy for collaborations, but I can do commissions.",
  },
  {
    message:
      "Or in other words, I only take on projects where I'm guaranteed payment.",
  },
  {
    message: 'Were you planning to pay me for my work?',
    replies: [
      {
        message: 'Of course!',
        to: 'project-acceptance',
      },
      {
        message: "That's not quite what I had in mind",
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
      'Just to set expectations upfront, what I do is really a niche form of software development, and I charge accordingly.',
  },
  {
    message:
      "It doesn't make sense for me to take on projects that pay less than I could earn doing regular ol' software development, ya know?",
  },
  {
    message: 'My current rate is $125 per hour.',
  },
  {
    message:
      'Obviously, different projects can take very different amounts of time to do.',
  },
  {
    message: 'A common request is for me to build a custom music generator.',
  },
  {
    message:
      "I usually budget about 10 hours of work for that, which doesn't include a website.",
  },
  {
    message:
      "I'd be happy to discuss what you had in mind and give you a rough estimate.",
  },
  {
    message: () => (
      <>
        Send the details to{' '}
        <a href="mailto:alex@alexbainter.com">alex@alexbainter.com</a> to get
        started.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'project-denial',
    message: "I understand, but I can't help you with your project. Sorry!",
    to: 'anything-else',
  },
];

const licensing = [
  {
    id: 'licensing',
    message: 'Yep!',
  },
  {
    message: () => (
      <>
        Check out{' '}
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
    message: "I'd love to see it!",
  },
  {
    message: () => (
      <>
        Send a link to{' '}
        <a href="mailto:alex@alexbainter.com">alex@alexbainter.com</a>.
      </>
    ),
  },
  {
    message: "I probably won't respond but I will check it out.",
    to: 'anything-else',
  },
];

const mainReplies = [
  {
    message: 'I want to work with you on a project',
    to: 'nft-check',
  },
  {
    message: 'Can I use your music for something?',
    to: 'licensing',
  },
  {
    message: 'I have a cool project to show you',
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
        <a href="mailto:alex@alexbainter.com">alex@alexbainter.com</a>.
      </>
    ),
  },
  {
    id: 'anything-else',
    message: 'Is there anything else you wanted to talk about?',
    replies: mainReplies,
  },
]
  .concat(nft)
  .concat(project)
  .concat(licensing)
  .concat(showAndTell);

export default tree;
