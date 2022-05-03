const sequelize = require("../config/connection");
const { Student, Teacher, User } = require("../models");

// connecting to the .json files
const seedTeacher = require("./teacherData.json");
const seedStudent = require("./studentData.json");
const seedUser = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedTeacher();
  console.log("\n----- TEACHERS SEEDED -----\n");

  await seedStudent();
  console.log("\n----- STUDENTS SEEDED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
