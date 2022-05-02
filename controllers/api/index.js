const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');

router.use('/teacher', teacherRoutes);
router.use('/student', studentRoutes);

module.exports = router;
