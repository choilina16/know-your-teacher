const { User } = require('../models');

const userData = [
  {
    first_name: 'Milton ',
    last_name: 'Friedman',
    email: 'milton.friedman@awesomedudes.com',
    password: 'Friedman',
    teacher_id: 1,
  },
  {
    first_name: 'Friedrich',
    last_name: 'Hayek',
    email: 'friedrich.hayek@awesomedudes.com',
    password: 'Hayek',
    teacher_id: 2,
  },
  {
    first_name: 'Thomas',
    last_name: 'Sowell',
    email: 'thomas.sowell@awesomedudes.com',
    password: 'Sowell',
    teacher_id: 3,
  },
  {
    first_name: 'Murray',
    last_name: 'Rothbard',
    email: 'murray.rothbard@awesomedudes.com ',
    password: ' Rothbard',
    teacher_id: 4,
  },
  {
    first_name: 'Ludwig von',
    last_name: 'Mises',
    email: 'ludwigvon.mises@awesomedudes.com',
    password: 'Mises',
    teacher_id: 5,
  },
  {
    first_name: 'Ron',
    last_name: 'Paul',
    email: 'ron.paul@awesomedudes.com',
    password: 'Paul',
    teacher_id: 5,
  },
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
