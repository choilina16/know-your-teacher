const router = require('express').Router();

const teacherRoutes = require('./teacherRoutes');
const userRoutes = require('./userRoutes');

// this is what you type in to get the results
router.use('/teacher', teacherRoutes);
router.use('/users', userRoutes);

module.exports = router;
