const { Teacher } = require('../models');

const teacherData = [
  {
    color: 'Blue',
    flower: 'Sunflowers',
    candy: 'Milky Way',
    places_to_eat: 'Outback',
    hobbies: 'Gardening',
    other: 'I do not celebrate birthdays',
  },
  {
    color: 'Purple',
    flower: 'Roses',
    candy: 'Jolly Rancher',
    places_to_eat: 'Applebees',
    hobbies: 'Basketball',
    other: 'Allergic to nuts',
  },
  {
    color: 'Red',
    flower: 'Tulip',
    candy: 'Snickers',
    places_to_eat: 'Subway',
    hobbies: 'Crafting',
    other: 'Loves gift cards to target',
  },
  {
    color: 'Orange',
    flower: 'Dahlia',
    candy: 'Hersheys',
    places_to_eat: 'Red Lobster',
    hobbies: 'Reading',
    other: 'I do not celebrate Christmas',
  },
  {
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
