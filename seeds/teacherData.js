const { Teacher } = require('../models');

const teacherData = [
  {
    first_name: 'Milton ',
    last_name: 'Friedman',
    color: 'Blue',
    flower: 'Sunflowers',
    candy: 'Milky Way',
    places_to_eat: 'Outback',
    hobbies: 'Gardening',
    other: 'I do not celebrate birthdays',
  },
  {
    first_name: 'Friedrich',
    last_name: 'Hayek',
    color: 'Purple',
    flower: 'Roses',
    candy: 'Jolly Rancher',
    places_to_eat: 'Applebees',
    hobbies: 'Basketball',
    other: 'Allergic to nuts',
  },
  {
    first_name: 'Thomas',
    last_name: 'Sowell',
    color: 'Red',
    flower: 'Tulip',
    candy: 'Snickers',
    places_to_eat: 'Subway',
    hobbies: 'Crafting',
    other: 'Loves gift cards to target',
  },
  {
    first_name: 'Murray',
    last_name: 'Rothbard',
    color: 'Orange',
    flower: 'Dahlia',
    candy: 'Hersheys',
    places_to_eat: 'Red Lobster',
    hobbies: 'Reading',
    other: 'I do not celebrate Christmas',
  },
  {
    first_name: 'Ludwig von',
    last_name: 'Mises',
    color: 'Yellow',
    flower: 'Orchid',
    candy: 'Kit Kat',
    places_to_eat: 'Cracker Barrel',
    hobbies: 'Singing',
    other: 'Gluten-free',
  },
];

const seedTeacher = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeacher;
