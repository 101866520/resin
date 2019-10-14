"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("SpeedZones", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        limit: {
          type: Sequelize.INTEGER,
        },
        p1: {
          latitude: {
            type: Sequelize.FLOAT,
          },
          longitude: {
            type: Sequelize.FLOAT
          }
        },
        p2: {
          latitude: {
            type: Sequelize.FLOAT,
          },
          longitude: {
            type: Sequelize.FLOAT
          }
        }
      });
    },
  
    down: (queryInterface, Sequelize) => {
      // remove table
      return queryInterface.dropTable("SpeedZones");
    }
  };