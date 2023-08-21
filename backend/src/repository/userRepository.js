const knex = require("knex");
const mySqlConfig = require("../config/knex-mysql");
const db = knex(mySqlConfig.development)

const getUser = async () => {
    const users = await db("users").select("*");
    return users;
};

module.exports = getUser;