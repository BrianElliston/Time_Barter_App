'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    {
      return queryInterface.bulkInsert('offers', [{
        category: 'Handy Man',
        description: 'Will paint',
        cost: 4     
      },{
        category: 'Handy Man',
        description: 'I do general house repairs',
        cost: 2
      },{
         category: 'Transportation',
        description: '24-hr airport service',
        cost: 2 
      },{
        category: 'Cooking',
        description: 'American, Asian, and Greek cuisine',
        cost: 3 
      },{
        category: 'Babysitting',
        description: 'Will babysit daytime hours, ages 2-5',
        cost: 4 
      },{
        category: 'Babysitting',
        description: 'Weekends only',
        cost: 4 
      },{
        category: 'Instructional',
        description: 'I teach piano',
        cost: 1 
      },{       
        category: 'Yard Work',
        description: 'Landscaping design and maintenance services',
        cost: 2 
      }],
    {});
  }
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('offers', null, {});
  }
};
