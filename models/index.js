const Teacher = require('./Teacher');
const Student = require('./Student');
const User = require('./User');

Teacher.hasMany(Student, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

Student.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

Teacher.hasOne(User, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

User.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

module.exports = { Teacher, Student, User };
