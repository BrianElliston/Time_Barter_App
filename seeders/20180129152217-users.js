'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    {
      return queryInterface.bulkInsert('user', [{
        name: 'Bob Doe',
        zipcode: '32832',
        email: 'demo@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, 
      { name: 'Jane Smith',
        zipcode: '32822',
        email: 'jsmith@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, {
        name: 'Jack Frost',
        zipcode: '32805',
        email: 'demo@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, 
      { name: 'Peter Griffin',
        zipcode: '32822',
        email: 'jsmith@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      },
      { name: 'Sharon Jones',
        zipcode: '32765',
        email: 'jsmith@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, {
        name: 'Chris Cringle',
        zipcode: '32801',
        email: 'demo@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, 
      { name: 'Mother Theresa',
        zipcode: '32832',
        email: 'Theresa@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      },
      {
      name: 'Bob Marley',
      zipcode: '32801',
      email: 'Marley@demo.com',
      password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
      time_bank: 5
      },
      { name: 'Marge Simpson',
        zipcode: '32765',
        email: 'marge@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, {
        name: 'Ron Burgundy',
        zipcode: '32825',
        email: 'reporter@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }, 
      { name: 'Donald Duck',
        zipcode: '32807',
        email: 'duck@demo.com',
        password: '$2a$10$qTg6ULwHQV7cUjb26o3pj.ia1LXaFjF5AWI00KI27GIN/yE82zpmG',
        time_bank: 5
      }], 
    {});
  }
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
