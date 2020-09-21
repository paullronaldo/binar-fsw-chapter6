'use strict'
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_history',
      [
        {
          log_id: uuidv4(),
          user_id: '2f72aa18-1876-4bd3-bde2-cd226655722c',
          level: 2,
          experience: 150,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: 'd6273722-c1be-4b48-900b-2e1598fcf120',
          level: 3,
          experience: 250,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '74dcc2e0-b235-42aa-b9ad-dee42604f882',
          level: 5,
          experience: 350,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '5870d8fa-a66b-4934-a3b2-3b62c677d9be',
          level: 5,
          experience: 450,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: 'e9959c56-50d4-4105-88ed-40000c3331ac',
          level: 5,
          experience: 455,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: 'fb5349ca-c918-4c37-bdbd-fce9ceef1f2e',
          level: 6,
          experience: 570,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: 'a5f333ad-8de7-4a3d-b86b-04eeb0a756fe',
          level: 3,
          experience: 275,
          last_login: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_history', null, {})
  },
}