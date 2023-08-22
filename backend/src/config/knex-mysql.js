const mySqlConfig = {
    development: {
        client: "mysql",
        connection: {
            // TODO: obtener de .env
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        }
    }
};

module.exports = mySqlConfig;