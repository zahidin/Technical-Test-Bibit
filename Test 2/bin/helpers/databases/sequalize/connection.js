const { Sequelize } = require('sequelize');
const config = require('../../../config/config');

const sequalize = new Sequelize(config.dbName,config.dbUsername, config.dbPassword, {
    host: config.dbHost,
    dialect:'mysql'
})

const checkConnection = async () => {
    try {
        await sequalize.authenticate()
        console.log('Connection has been established successfully.')
    }catch(err) {
        console.error('Unable to connect to the database:', err)
    }
}

const init = () => {
    checkConnection()
}

module.exports = init