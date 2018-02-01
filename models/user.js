'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    time_bank: DataTypes.INTEGER
  });

    User.associate = function(models) {
        // Associate users and offers. User can have more than one offer.
        User.hasMany(models.Offer, {
          onDelete: "cascade"
        });
      }
  return User;
};