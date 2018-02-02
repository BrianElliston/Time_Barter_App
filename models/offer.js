'use strict';
module.exports = (sequelize, DataTypes) => {
  var Offer = sequelize.define('offer', {
    off_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER
  }); 

  Offer.associate = function(models) {
    // An offer must have a user. 
    Offer.belongsTo(models.user, {
      // Foereign key constraint 
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Offer;
};




