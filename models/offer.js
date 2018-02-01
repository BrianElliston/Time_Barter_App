'use strict';
module.exports = (sequelize, DataTypes) => {
  var Offer = sequelize.define('offer', {//'Offer'
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER
  }); 

  Offer.associate = function(models) {
    // An offer must have a user. 
    Offer.belongsTo(models.user, {//models.User
      // Foreign key constraint 
      foreignKey: {
        allowNull: false
      }
    });
  };
  // Offer.sync();//doesn't have this
  return Offer;
};




