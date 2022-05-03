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
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
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
  hooks: {
    async beforeCreate(newStudentData) {
      newStudentData.password = await bcrypt.hash(newStudentData.password, 8);
      return newStudentData;
    },
    beforeUpdate: async (updatedStudentData) => {
      updatedStudentData.password = await bcrypt.hash(
        updatedStudentData.password,
        8
      );
      return updatedStudentData;
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "project",
});

module.exports = Project;
