const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(30),
    },
    last_name: {
      type: DataTypes.STRING(30),
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
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teacher',
        key: 'id',
      },
    },
  },
  {
    // hooks: {
    //   beforeCreate: async (newuserData) => {
    //     newuserData.password = await bcrypt.hash(newuserData.password, 10);
    //     return newuserData;
    //   },
    //   beforeUpdate: async (updateduserData) => {
    //     updateduserData.password = await bcrypt.hash(
    //       updateduserData.password,
    //       10
    //     );
    //     return updatedUserData;
    //   },
    // },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
