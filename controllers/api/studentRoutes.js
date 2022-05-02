const router = require('express').Router();
const { student } = require('../../models');

// GET all students
router.get('/', async (req, res) => {
  try {
    const studentData = await Student.findAll();
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single student
router.get('/:id', async (req, res) => {
  try {
    const studentData = await Student.findByPk(req.params.id, {
      // JOIN with teachers, using the  through table
      include: [{ model: teacher, through: teacher-input, as: 'student_teacher' }]
    });

    if (!studentData) {
      res.status(404).json({ message: 'No student found with this id!' });
      return;
    }

    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newStudent = await Student.create({
      ...req.body,
      user_id: req.session.teacher_id,
    });

    res.status(200).json(newStudent);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
