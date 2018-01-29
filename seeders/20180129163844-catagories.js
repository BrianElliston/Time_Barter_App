'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    {
      return queryInterface.bulkInsert('categories', [{

       title: 'Handy Man'

       },

     {
      title: "Cooking"
     },

     {
      title: "Cleaning"
     },

    {
      title: "Tech Servives"

    },

    {
      title: "Instruction"

    },

    {
      title: "Baby/Senior Sitting"

    },

    {
      title: "Yard Work"

    },

    {
      title: "Transportation"

    },

    {
      title: "Pet Care"

    },
    
    ],
        {});
    }
  },


  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('categories');
   
  }
};
