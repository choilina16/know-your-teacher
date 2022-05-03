const router = require("express").Router();
const studentRoutes = require("./studentRoutes");
const teacherRoutes = require("./teacherRoutes");
const userRoutes = require("./userRoutes");

// this is what you type in to get the results
router.use("/teacher", teacherRoutes);
router.use("/student", studentRoutes);
router.use("/User", userRoutes);

module.exports = router;
