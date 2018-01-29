'use strict';
module.exports = (sequelize, DataTypes) => {
  var offers = sequelize.define('offers', {
    off_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return offers;
};