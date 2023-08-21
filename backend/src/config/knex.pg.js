const pgConfig = {
    development: {
        client: "pg",
        connection: {
            host: "host",
            user: "user",
            password: "password",
            database: "database",
            ssl: { rejectUnauthorized: false }
        }
    }
}