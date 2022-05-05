const router = require('express').Router();
const { Teacher, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// create a new teacher // activity 14 as a reference
// /api/teacher/
router.post('/', async (req, res) => {
  try {
    // these are the areas that need to filled out to create a new teacher
    const newTeacher = await Teacher.create(
      req.body
      // userId: req.session.userId,
    );
    // first_name: req.body.first_name,
    // last_name: req.body.last_name,
    // color: req.body.color,
    // flower: req.body.flower,
    // candy: req.body.candy,
    // places_to_eat: req.body.places_to_eat,
    // hobbies: req.body.hobbies,
    // other: req.body.other,

    res.status(200).json(newTeacher);
  } catch (err) {
    res.status(400).json(err);
  }
});

// if we have time we can put in a delete or put(update)

module.exports = router;
