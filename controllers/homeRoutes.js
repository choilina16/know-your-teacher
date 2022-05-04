const router = require('express').Router();
const { Teacher, User } = require('../models');
// const withAuth = require('../../utils/auth');

// The `/` endpoint // GET REQUEST -> find all teachers // including its associated student data
router.get('/', async (req, res) => {
  try {
    const teacherData = await Teacher.findAll({
      include: [
        {
          model: User, // associated with the student data
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    // rendering the homepage (main.handlebars)
    res.render('home', {
      teacherData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// The '/id' endpoint // GET REQUEST -> find a single teacher by its `id
router.get('/:id', async (req, res) => {
  try {
    // .findByPk - find by primary key
    const teacherData = await Teacher.findByPk(req.params.id, {
      include: [
        {
          model: User, // associated with the teacher input data
        },
      ],
    });

    if (!teacherData) {
      res.status(400).json({
        message: 'Error! There is no teacher related to this id. Try again!',
      });
      return;
    }

    res.render('teacher', { teacherData, loggedIn: req.session.loggedIn });
    // res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
