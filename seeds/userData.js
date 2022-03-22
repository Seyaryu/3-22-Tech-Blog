const { User } = require('../models');

const userData = [
  {
    "username": "Dholland",
    "email": "Dan@email.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;