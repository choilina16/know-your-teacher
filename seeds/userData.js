const { User } = require('../models');

const userData = [
  {
    email: 'milton.friedman@awesomedudes.com',
    password: 'Friedman',
  },
  {
    email: 'friedrich.hayek@awesomedudes.com',
    password: 'Hayekkkk',
  },
  {
    email: 'thomas.sowell@awesomedudes.com',
    password: 'Sowellllll',
  },
  {
    email: 'murray.rothbard@awesomedudes.com',
    password: 'Rothbard',
  },
  {
    email: 'ludwigvon.mises@awesomedudes.com',
    password: 'Misesssss',
  },
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
