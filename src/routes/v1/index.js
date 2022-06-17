const getUsers = require("../../controllers/v1/users-controller");
const usersController = require("../../controllers/v1/users-controller");
const createRoutesV1 = (app) => {
  app.get("/api/v1/users", usersController.getUsers);
};

module.exports = createRoutesV1;
