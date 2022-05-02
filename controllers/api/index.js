const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const teacherInputRoutes = require('./teacherInputRoutes');

router.use('/teacher', teacherRoutes);
router.use('/student', studentRoutes);
router.use('/teacherinput', teacherInputRoutes);

module.exports = router;
