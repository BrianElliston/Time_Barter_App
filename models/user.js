'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    time_bank: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};