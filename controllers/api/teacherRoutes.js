const router = require('express').Router();
const { Teacher, Student, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// The `/api/teacher` endpoint // GET REQUEST -> find all tags // including its associated student data
router.get('/', async (req, res) => {
  try {
    const teacherData = await Teacher.findAll({
      include: [
        {
          model: Student, // associated with the student data
        },
        {
          model: User, // associated with the teacher input data // probably need to change this??
        },
      ],
    });

    // Serialize data so the template can read it
    const teachers = teacherData.map((teacher) => teacher.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      teachers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   const dishData = await Dish.findAll().catch((err) => {
//       res.json(err);
//     });
//       const dishes = dishData.map((dish) => dish.get({ plain: true }));
//       res.render('all', { dishes });
//     });

// The '/api/teacher/id' endpoint // GET REQUEST -> find a single teacher by its `id // including its associated student data
router.get('/:id', async (req, res) => {
  try {
    // .findByPk - find by primary key
    const teacherData = await Teacher.findByPk(req.params.id, {
      include: [
        {
          model: Student, // associated with the student data
        },
        {
          model: User, // associated with the teacher input data
        },
      ],
    });

    // if (!teacherData) {
    //   res.status(400).json({
    //     message: 'Error! There is no teacher related to this id. Try again!',
    //   });
    //   return;
    // }

    // res.status(200).json(teacherData);
    const teacher = teacherData.get({ plain: true });

    res.render('teacher', {
      ...teacher,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/dish/:id', async (req, res) => {
//   try{
//       const dishData = await Dish.findByPk(req.params.id);
//       if(!dishData) {
//           res.status(404).json({message: 'No dish with this id!'});
//           return;
//       }
//       const dish = dishData.get({ plain: true });
//       res.render('dish', dish);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

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
