const router = require('express').Router();
const { Teacher, Student, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// create a new teacher // activity 14 as a reference
router.post('/', async (req, res) => {
  try {
    // these are the areas that need to filled out to create a new teacher
    const teacherData = await Teacher.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      teacher_confirm: req.body.teacher_confirm, //boolean
    });
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// if we have time we can put in a delete or put(update)

module.exports = router;
