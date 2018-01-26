'use strict';
module.exports = (sequelize, DataTypes) => {
  var offers = sequelize.define('offers', {
    off_id: DataTypes.SEQUELIZE.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return offers;
};