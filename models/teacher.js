const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Teacher extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Teacher.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flower: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  candy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  places_to_eat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hobbies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  other: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "teacher",
});

module.exports = Teacher;
