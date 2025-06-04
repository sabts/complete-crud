const express = require("express");
const usersRoutes = express.Router();
const usersController = require("../controllers/users.controller");

usersRoutes.get("/", usersController.getAllData);
usersRoutes.get("/:id", usersController.getDataById);
usersRoutes.patch("/:id", usersController.updateDataById);
usersRoutes.delete("/:id", usersController.deleteDataById);

module.exports = usersRoutes;
