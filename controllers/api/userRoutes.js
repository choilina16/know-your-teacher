const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
// const withAuth = require('../../utils/auth');

// Create a user -> /api/users/
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.json(newUser);
    });
    // res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login to an account -> /api/users/login
router.post("/login", async (req, res) => {
  // checking to see the email matches the db
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.status(400).json({ message: "Incorrect email please try again" });
      return;
    }
    // checking to see if the ps matches
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }
    // if they do match, return success message
    res.status(200).json({ message: "You are now logged in!" });
  } catch (err) {
    res.status(500).json(err);
  }

});

// ends session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
