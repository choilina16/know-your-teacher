const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const teacherInputRoutes = require('./teacherInputRoutes');

// this is what you type in to get the results 
router.use('/teacher', teacherRoutes);
router.use('/student', studentRoutes);
router.use('/teacherInput', teacherInputRoutes);


module.exports = router;
