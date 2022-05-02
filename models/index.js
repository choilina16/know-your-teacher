const Teacher = require('./teacher');
const Student = require('./student');

User.hasMany(Teacher, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Teacher.belongsTo(Student, {
  foreignKey: 'user_id'
});

module.exports = { Teacher, Student };
