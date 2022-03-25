const { User } = require('../models');

const userData = [
  {
    "name": "Dholland",
    "email": "Dan@email.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;