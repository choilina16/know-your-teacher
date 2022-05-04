const Teacher = require('./Teacher');
const User = require('./User');

Teacher.hasOne(User, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

User.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

module.exports = { Teacher, User };
