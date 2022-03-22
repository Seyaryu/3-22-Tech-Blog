const { Post } = require('../models');

const postData = [
  {
    "name": "Why MVC is So Important",
    "content": "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the COntroller layer for applicaton Logic",
    "user_id": 1
  },
  {
    "name": "Authentication vs. Authorization",
    "content": "There is a difference between authentication and authorization.  Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    "user_id": 1
  },
  {
    "name": "Object-Relational Mapping",
    "content": "I have really loved learning about ORMs.  It's really simplified the way I create queries in SQL!",
    "user_id": 1
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;