export const POSTS = [
  {
    _id: "1",
    text: "Wanting people to listen, you can't just tap them on the shoulder anymore. You have to hit them with a sledgehammer. And then you'll notice you've got their strict attention.",
    img: "/posts/post1.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy1.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl1.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "2",
    text: "Alright. Let me ask you something. If the rule you followed brought you to this, of what use was the rule? 😊",
    user: {
      username: "Anton Chigurh",
      profileImg: "/avatars/boy2.png",
      fullName: "Anton Chigurh",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl2.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "3",
    text: "We see a deadly sin on every street corner, in every home, and we tolerate it. We tolerate it because it's common, it's trivial. We tolerate it morning, noon, and night. Well, not anymore. I'm setting the example, and what I've done is going to be puzzled over and studied and followed... forever.",
    img: "/posts/post2.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
    ],
  },
  {
    _id: "4",
    text: "I visited your home this morning. After you'd left.",
    img: "/posts/post3.png",
    user: {
      username: "Max Cady",
      profileImg: "/avatars/boy3.png",
      fullName: "Max Cady",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl3.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
      "6658s897",
      "6658s898",
      "6658s899",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "2",
    fullName: "Jane Doe",
    username: "janedoe",
    profileImg: "/avatars/girl1.png",
  },
  {
    _id: "3",
    fullName: "Bob Doe",
    username: "bobdoe",
    profileImg: "/avatars/boy3.png",
  },
  {
    _id: "4",
    fullName: "Daisy Doe",
    username: "daisydoe",
    profileImg: "/avatars/girl2.png",
  },
];
