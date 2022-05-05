const router = require('express').Router();
const { Teacher, User } = require('../models');
// ***uncommited line 4
const withAuth = require('../utils/auth'); //updated path

// The `/` endpoint // GET REQUEST -> find all teachers // including its associated student data
router.get('/', async (req, res) => {
  try {
    const teacherData = await Teacher
      .findAll
      // {
      //   include: [
      //     {
      //       model: User, // associated with the student data
      //     },
      //   ],
      // }
      ();

    // need to serialize data before it can be rendered to the page
    const teachers = teacherData.map((teacher) => teacher.get({ plain: true }));

    // rendering the homepage (main.handlebars)
    res.render('home', {
      teachers,
      // logged_In: req.session.logged_In,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /create page for the teacher input
// Use withAuth middleware to prevent access to route
router.get('/create', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Teacher }],
    });

    const user = userData.get({ plain: true });

    // renders create.handlebars
    res.render('create', {
      ...user,
      // logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// The '/teacher/id' endpoint // GET REQUEST -> find a single teacher by its `id
router.get('/teacher/:id', async (req, res) => {
  try {
    // .findByPk - find by primary key
    const teacherData = await Teacher.findByPk(
      req.params.id
      //   {
      //   include: [
      //     {
      //       model: User, // associated with the teacher input data
      //     },
      //   ],
      // }
    );

    if (!teacherData) {
      res.status(400).json({
        message: 'Error! There is no teacher related to this id. Try again!',
      });
      return;
    }

    const teacher = teacherData.get({ plain: true });

    res.render('teacher', {
      ...teacher,
      logged_In: req.session.logged_In,
    });
    // res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ** Start add SS 5/4 6:45
// The '/id' endpoint // GET REQUEST -> find a single teacher by its `id
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('home', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// *** End add SS 5/4 6:45

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/create');
    return;
  }
  res.render('signup');
});

module.exports = router;
