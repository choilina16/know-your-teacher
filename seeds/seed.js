const sequelize = require('../config/connection');
const { Student, Teacher, User } = require('../models');

// connecting to the .json files 
const seedStudent = require('./studentData.json');
const seedTeacher = require('./teacherData.json');
const seedUser = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
