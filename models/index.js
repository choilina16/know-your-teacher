const Teacher = require('./teacher');
const Student = require('./student');
const User = require('./User');

Teacher.hasMany(Student, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

Teacher.hasOne(User, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

module.exports = { Teacher, Student, User };
