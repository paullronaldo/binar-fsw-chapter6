'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game',
      [
        {
          id: '2f72aa18-1876-4bd3-bde2-cd226655722c',
          username: 'rheathwood0',
          email: 'rheathwood0@rediff.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd6273722-c1be-4b48-900b-2e1598fcf120',
          username: 'takerman1',
          email: 'takerman1@oracle.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '74dcc2e0-b235-42aa-b9ad-dee42604f882',
          username: 'bferrers2',
          email: 'bferrers2@uol.com.br',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game', null, {})
  },
}