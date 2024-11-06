export const mockChats = [
  {
    id: '1',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    lastMessage: 'See you tomorrow at the meeting!',
    lastMessageTime: '10:30 AM',
    online: true,
    messages: [
      {
        content: 'Hey, how are you?',
        time: '10:00 AM',
        isSender: false,
      },
      {
        content: 'I\'m good, thanks! How about you?',
        time: '10:15 AM',
        isSender: true,
      },
      {
        content: 'Great! Don\'t forget about our meeting tomorrow.',
        time: '10:20 AM',
        isSender: false,
      },
      {
        content: 'See you tomorrow at the meeting!',
        time: '10:30 AM',
        isSender: true,
      },
    ],
  },
  {
    id: '2',
    name: 'James Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    lastMessage: 'The project files are ready',
    lastMessageTime: '9:15 AM',
    online: true,
    messages: [
      {
        content: 'Hi, I\'ve finished the project files',
        time: '9:00 AM',
        isSender: false,
      },
      {
        content: 'Great work! I\'ll take a look',
        time: '9:10 AM',
        isSender: true,
      },
      {
        content: 'The project files are ready',
        time: '9:15 AM',
        isSender: false,
      },
    ],
  },
  {
    id: '3',
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    lastMessage: 'Thanks for your help!',
    lastMessageTime: 'Yesterday',
    online: false,
    messages: [
      {
        content: 'Could you help me with the presentation?',
        time: 'Yesterday',
        isSender: false,
      },
      {
        content: 'Of course! I\'ll send you some templates',
        time: 'Yesterday',
        isSender: true,
      },
      {
        content: 'Thanks for your help!',
        time: 'Yesterday',
        isSender: false,
      },
    ],
  },
];