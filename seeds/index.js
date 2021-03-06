const sequelize = require('../config/connection');

const seedPosts = require('./postData');
const seedUsers = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
