  
"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Vehicles",
            [
                { // 1
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "AUDI",
                    "model": "SQ5",
                    "oem": "DELPHI",
                    "yearOfManufacture": 2014,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 2
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "LEXUS",
                    "model": "RX450",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2011,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 3
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "LEXUS",
                    "model": "RX450H",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2011,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 4
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "LEXUS",
                    "model": "RX450H",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 5
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "LEXUS",
                    "model": "RX450H",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2012,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 6
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "NISSAN",
                    "model": "LEAF",
                    "oem": "CRUISE AUTOMATION INC.",
                    "yearOfManufacture": 2012,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 7
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "GOOGLE",
                    "model": "SELF DRIVING CAR",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 8
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "GOOGLE",
                    "model": "PROTOTYPE",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 9
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "NISSAN",
                    "model": "LEAF",
                    "oem": "NISSAN NORTH AMERICA INC",
                    "yearOfManufacture": 2010,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 10
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "CHEVROLET",
                    "model": "BOLT",
                    "oem": "GM CRUISE LLC",
                    "yearOfManufacture": 2017,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 11
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "CHEVROLET",
                    "model": "BOLT",
                    "oem": "GM CRUISE LLC",
                    "yearOfManufacture": 2016,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 12
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "VOLVO",
                    "model": "XC90",
                    "oem": "UATC, LLC",
                    "yearOfManufacture": 2017,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 13
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "CHRYSLER",
                    "model": "PACIFICA",
                    "oem": "WAYMO AUTO LLC",
                    "yearOfManufacture": 2017,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 13
                    "type": "CAR",
                    "registration": null,
                    "vin": null,
                    "make": "Toyota",
                    "model": "Highlander",
                    "oem": "Zoox Inc",
                    "yearOfManufacture": 2016,
                    "countryOfManufacture": null,
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vehicles", null, {});
    }
};