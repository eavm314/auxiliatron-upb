const mySqlConfig = {
    development: {
        client: "mysql",
        connection: {
            // TODO: obtener de .env
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "auxiliatron"
        }
    }
};

module.exports = mySqlConfig;