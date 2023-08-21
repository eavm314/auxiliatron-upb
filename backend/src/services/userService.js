const getUser = require("../repository/userRepository");

const getUserService = () => {
    // TODO: conectar repository
    console.log("servicio");
    const users = getUser();
    return users
};

module.exports = getUserService;
