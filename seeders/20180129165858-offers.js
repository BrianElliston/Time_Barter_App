'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    {
      return queryInterface.bulkInsert('offers', [{
        category: 'Handy Man',
        description: 'Will paint',
        cost: 4,
        userId: 1
      },{
        category: 'Handy Man',
        description: 'I do general house repairs',
        cost: 2,
        userId: 2
      },{
         category: 'Transportation',
        description: '24-hr airport service',
        cost: 2 ,
        userId: 3
      },{
        category: 'Cooking',
        description: 'American, Asian, and Greek cuisine',
        cost: 3,
        userId: 4
      },{
        category: 'Babysitting',
        description: 'Will babysit daytime hours, ages 2-5',
        cost: 4,
        userId: 5 
      },{
        category: 'Babysitting',
        description: 'Weekends only',
        cost: 4,
        userId: 6 
      },{
        category: 'Instructional',
        description: 'I teach piano',
        cost: 1,
        userId: 7 
      },{       
        category: 'Yard Work',
        description: 'Landscaping design and maintenance services',
        cost: 2,
        userId: 8 
      }],
    {});
  }
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('offers', null, {});
  }
};
