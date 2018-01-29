'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    {
      return queryInterface.bulkInsert('users', [{
        name: 'Bob Doe',
        zipcode: '32832',
        email: 'demo@demo.com',
        password: 'test123',
        time_bank: 5
      }, 
      { name: 'Jane Smith',
        zipcode: '32822',
        email: 'jsmith@demo.com',
        password: 'test123',
        time_bank: 5
      }, {
        name: 'Jack Frost',
        zipcode: '32805',
        email: 'demo@demo.com',
        password: 'test123',
        time_bank: 5
      }, 
      { name: 'Peter Griffin',
        zipcode: '32822',
        email: 'jsmith@demo.com',
        password: 'test123',
        time_bank: 5
      },
      { name: 'Sharon Jones',
        zipcode: '32765',
        email: 'jsmith@demo.com',
        password: 'test123',
        time_bank: 5
      }, {
        name: 'Chris Cringle',
        zipcode: '32801',
        email: 'demo@demo.com',
        password: 'test123',
        time_bank: 5
      }, 
      { name: 'Mother Theresa',
        zipcode: '32832',
        email: 'Theresa@demo.com',
        password: 'test123',
        time_bank: 5
      },
      {
      name: 'Bob Marley',
      zipcode: '32801',
      email: 'Marley@demo.com',
      password: 'test123',
      time_bank: 5
      },
      { name: 'Marge Simpson',
        zipcode: '32765',
        email: 'marge@demo.com',
        password: 'test123',
        time_bank: 5
      }, {
        name: 'Ron Burgundy',
        zipcode: '32825',
        email: 'reporter@demo.com',
        password: 'test123',
        time_bank: 5
      }, 
      { name: 'Donald Duck',
        zipcode: '32807',
        email: 'duck@demo.com',
        password: 'test123',
        time_bank: 5
      }], 
    {});
    }
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkInsert('Person', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
