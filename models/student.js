const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Student extends Model {}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING.VARCHAR(30),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING.VARCHAR(30),
    allowNull: false,
  },
  teacher_id: {
    type: DataTypes.STRING.VARCHAR(30),
    allowNull: false,
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "student",
});

module.exports = Student;
