const Teacher = require('./Teacher');
const User = require('./User');

User.hasOne(Teacher, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Teacher.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Teacher, User };
