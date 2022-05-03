const router = require('express').Router();

const teacherRoutes = require('./teacherRoutes');
const studentRoutes = require('./studentRoutes');
const userRoutes = require('./userRoutes');

// this is what you type in to get the results
router.use('/teacher', teacherRoutes);
router.use('/student', studentRoutes);
router.use('/user', userRoutes);

module.exports = router;
