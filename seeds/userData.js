const { User } = require("../models");

const userData = [
  {
    first_name: "Milton ",
    last_name: "Friedman",
    teacher_id: "",
    email: " milton.friedman@awesomedudes.com",
    password: " Friedman",
    teacher_confirm: "true ",
  },
  {
    first_name: "Friedrich",
    last_name: "Hayek",
    teacher_id: " ",
    email: "friedrich.hayek@awesomedudes.com",
    password: "Hayek",
    teacher_confirm: "true",
  },
  {
    first_name: "Thomas",
    last_name: "Sowell",
    teacher_id: " ",
    email: "thomas.sowell@awesomedudes.com",
    password: "Sowell ",
    teacher_confirm: "true ",
  },
  {
    first_name: "Murray",
    last_name: "Rothbard",
    teacher_id: " ",
    email: "murray.rothbard@awesomedudes.com ",
    password: " Rothbard",
    teacher_confirm: "false",
  },
  {
    first_name: "Ludwig von",
    last_name: "Mises",
    teacher_id: " ",
    email: " ludwigvon.mises@awesomedudes.com",
    password: "Mises ",
    teacher_confirm: "false ",
  },
  {
    first_name: "Ron",
    last_name: "Paul",
    teacher_id: " ",
    email: "ron.paul@awesomedudes.com",
    password: "Paul",
    teacher_confirm: "false ",
  },
];
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
