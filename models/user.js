'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user - id: DataTypes.SEQUELIZE.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};