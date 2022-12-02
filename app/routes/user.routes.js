module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
  let router = require("express").Router();

  // @get all users
  router.get("/", user.getUsers);
  // @get single user
  router.get("/:id", user.getUser);

  app.use("/api/users", router);
};
