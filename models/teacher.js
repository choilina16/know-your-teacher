const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Teacher extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Teacher.init(
  {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    teacher_confirm: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    hooks: {
      beforeCreate: async (newTeacherData) => {
        newTeacherData.password = await bcrypt.hash(newTeacherData.password, 10);
        return newTeacherData;
      },
      beforeUpdate: async (updatedTeacherData) => {
        updatedTeacherData.password = await bcrypt.hash(updatedTeacherData.password, 10);
        return updatedTeacherData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'teacher',
  }
);

module.exports = Teacher;
