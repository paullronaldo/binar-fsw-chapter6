'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_biodata',
      [
        {
          uid: '2f72aa18-1876-4bd3-bde2-cd226655722c',
          first_name: 'Rodd',
          last_name: 'Heathwood',
          city: 'Łąck',
        },
        {
          uid: 'd6273722-c1be-4b48-900b-2e1598fcf120',
          first_name: 'Taylor',
          last_name: 'Akerman',
          city: 'Lappi',
        },
        {
          uid: '74dcc2e0-b235-42aa-b9ad-dee42604f882',
          first_name: 'Bliss',
          last_name: 'Ferrers',
          city: 'Honggang',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_biodata', null, {})
  },
}