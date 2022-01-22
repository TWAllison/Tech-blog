const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcryptjs = require("bcryptjs");

class User extends Model {
  checkPassword(signinPassword) {
    return bcryptjs.compareSync(signinPassword, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 40],
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
  hooks: {
    async beforeCreate(newUser) {
      newUser.password = await bcryptjs.hash(newUser.password, 10);
      return newUser;
    },
  },
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
});

module.exports = User;