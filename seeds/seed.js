const sequelize = require('../config/connection');
// const { Student, Teacher, User } = require('../models');

// connecting to the .js files
const seedTeacher = require('./teacherData.js');
const seedUser = require('./userData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedTeacher();
  console.log('\n----- TEACHERS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
