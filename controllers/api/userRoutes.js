const router = require('express').Router();
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

// Create a user -> /upi/users/
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.email = newUser.email;
      req.session.password = newUser.password;
      req.session.loggedIn = true;

      res.json(newUser);
    });
    // res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
// router.get('/:id', async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id, {
//       // JOIN with teachers, using the  through table
//       include: [{ model: teacher, through: user, as: 'user_teacher' }],
//     });

//     if (!userData) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     console.log(req.body);

//     req.session.save(() => {
//       req.session.user_id = newUser.id;
//       req.session.logged_in = true;

//       res.status(200).json(newUser);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
//login to an account
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // creates a sesson with the express session library
    req.session.save(() => {
      req.session.email = user.email;
      req.session.password = user.password;
      req.session.logged_in = true;

      res.json({ user: user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// ends session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
