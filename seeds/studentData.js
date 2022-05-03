const { Student } = require("../models");

const studentData = [
  {
    first_name: "Colette",
    last_name: "Koala",
  },
  {
    first_name: "Cricket",
    last_name: "Pearl",
  },
  {
    first_name: "Elsie",
    last_name: "Otter",
  },
  {
    first_name: "Halcyon",
    last_name: "Juna",
  },
  {
    first_name: "Mirabella",
    last_name: "Bunny",
  },
];

const seedStudent = () => Student.bulkCreate(studentData);

module.exports = seedStudent;
