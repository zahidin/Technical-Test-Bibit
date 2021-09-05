require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY,
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
};

module.exports = config