const sequelize = require('../config/connection');

const seedBlogs = require('./blogData');
const seedUsers = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
