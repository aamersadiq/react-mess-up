const messages = [
  {
    id: "g-1",
    text: "Message 1",
    isRead: true,
    createdDate: new Date(2020, 03, 12, 10, 20, 23),
    createdBy: {
      id: "g-1",
      firstName: "Aamer",
      lastName: "Sadiq",
    },
    replies: [],
  },
  {
    id: "g-2",
    text: "Message 2",
    isRead: false,
    createdDate: new Date(2020, 03, 16, 10, 20, 23),
    createdBy: {
      id: "g-2",
      firstName: "Mary",
      lastName: "Smith",
    },
    replies: [],
  },
  {
    id: "g-3",
    text: "Message 3",
    isRead: true,
    createdDate: new Date(2020, 04, 02, 10, 20, 23),
    createdBy: {
      id: "g-1",
      firstName: "Aamer",
      lastName: "Sadiq",
    },
    replies: [
      {
        id: "g-31",
        messageId: "g-3",
        text: "Reply 1",
        createdDate: new Date(2020, 04, 02, 10, 30, 23),
        createdBy: {
          id: "g-11",
          firstName: "John",
          lastName: "Smith",
        },
        isRead: true,
      },
      {
        id: "g-32",
        messageId: "g-3",
        text: "Reply 2",
        createdDate: new Date(2020, 04, 02, 10, 45, 23),
        createdBy: {
          id: "g-1",
          firstName: "Aamer",
          lastName: "Sadiq",
        },
        isRead: true,
      },
    ],
  },
  {
    id: "g-4",
    text: "Message 4",
    isRead: true,
    createdDate: new Date(2020, 04, 12, 20, 20, 23),
    createdBy: {
      id: "g-1",
      firstName: "Aamer",
      lastName: "Sadiq",
    },
    replies: [
      {
        id: "g-41",
        messageId: "g-4",
        text: "Reply 1",
        createdDate: new Date(2020, 04, 12, 20, 30, 23),
        createdBy: {
          id: "g-22",
          firstName: "David",
          lastName: "Boon",
        },
        isRead: false,
      },
      {
        id: "g-42",
        messageId: "g-4",
        text: "Reply 2",
        createdDate: new Date(2020, 04, 12, 20, 40, 23),
        createdBy: {
          id: "g-22",
          firstName: "David",
          lastName: "Boon",
        },
        isRead: false,
      },
    ],
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  messages,
};
