const { User } = require('../models');

const userData = [
  {
    email: 'milton.friedman@awesomedudes.com',
    password: 'Friedman',
    teacher_confirm: true,
    teacher_id: 1,
  },
  {
    email: 'friedrich.hayek@awesomedudes.com',
    password: 'Hayek',
    teacher_confirm: true,
    teacher_id: 2,
  },
  {
    email: 'thomas.sowell@awesomedudes.com',
    password: 'Sowell ',
    teacher_confirm: true,
    teacher_id: 3,
  },
  {
    email: 'murray.rothbard@awesomedudes.com ',
    password: ' Rothbard',
    teacher_confirm: true,
    teacher_id: 4,
  },
  {
    email: 'ludwigvon.mises@awesomedudes.com',
    password: 'Mises',
    teacher_confirm: true,
    teacher_id: 5,
  },
  {
    email: 'ron.paul@awesomedudes.com',
    password: 'Paul',
    teacher_confirm: true,
    teacher_id: 5,
  },
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
