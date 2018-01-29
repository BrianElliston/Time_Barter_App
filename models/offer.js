'use strict';
module.exports = (sequelize, DataTypes) => {
  var Offers = sequelize.define('Offer', {
    off_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
      }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return offers;
};

