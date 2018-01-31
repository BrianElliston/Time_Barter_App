'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    time_bank: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      field: 'beginTime',
     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }, 
    updatedAt: {
      type: DataTypes.DATE(3),
      field: 'beginTime',
     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },


  });

    User.associate = function(models) {
        // Associate users and offers. User can have more than one offer.
        User.hasMany(models.Offer, {
          onDelete: "cascade"
        });
      }
  return User;
};