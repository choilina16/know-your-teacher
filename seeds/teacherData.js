const { Teacher } = require('../models');

const teacherData = [
  {
    first_name: 'George',
    last_name: 'Washington',
    color: 'Blue',
    flower: 'Sunflowers',
    candy: 'Milky Way',
    place_to_eat: 'Outback',
    hobbies: 'Gardening',
    other: 'I do not celebrate birthdays',
  },
  {
    first_name: 'John',
    last_name: 'Adams',
    color: 'Purple',
    flower: 'Roses',
    candy: 'Jolly Rancher',
    place_to_eat: 'Applebees',
    hobbies: 'Basketball',
    other: 'Allergic to nuts',
  },
  {
    first_name: 'Thomas',
    last_name: 'Jefferson',
    color: 'Red',
    flower: 'Tulip',
    candy: 'Snickers',
    place_to_eat: 'Subway',
    hobbies: 'Crafting',
    other: 'Loves gift cards to target',
  },
  {
    first_name: 'James',
    last_name: 'Madison',
    color: 'Orange',
    flower: 'Dahlia',
    candy: 'Hersheys',
    place_to_eat: 'Red Lobster',
    hobbies: 'Reading',
    other: 'I do not celebrate Christmas',
  },
  {
    first_name: 'James',
    last_name: 'Monroe',
    color: 'Yellow',
    flower: 'Orchid',
    candy: 'Kit Kat',
    place_to_eat: 'Cracker Barrel',
    hobbies: 'Singing',
    other: 'Gluten-free',
  },
];

const seedTeacher = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeacher;
