const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.get("/login", authController.getLoginForm);
authRouter.post("/login", authController.login);
authRouter.get("/crearusuario", authController.getCreateUserForm);
authRouter.post("/crearusuario", authController.createUser);

module.exports = authRouter;
