const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
// GET all user
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      // JOIN with teachers, using the  through table
      include: [{ model: teacher, through: user, as: "user_teacher" }],
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      teacher_id: req.body.teacher_id,
      email: req.body.email,
      password: req.body.password,
      teacher_confirm: req.body.teacher_confirm,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
