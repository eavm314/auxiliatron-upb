const knex = require("knex");
const mySqlConfig = require("../config/knex-mysql");
const db = knex(mySqlConfig.development)

const getUser = async () => {
    try {
        const users = await db("users").select("*");
        const usersJson = users.map((row) => ({
          id: row.id,
          name: row.name,
          lastname: row.lastname,
          code: row.code,
          username: row.username,
        }));
        return usersJson;
      } catch (e) {
        console.error(e);
        return e;
      }
};

module.exports = getUser;