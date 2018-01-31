'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('category', {
    cat_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Category;
};