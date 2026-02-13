const loginForm = require("../helpers/login");
const crearUsuario = require("../helpers/crearUsuario");
const User = require("../models/User");

const authController = {
  getLoginForm: (req, res) => {
    const html = loginForm();
    return res.send(html);
  },
  getCreateUserForm: (req, res) => {
    const html = crearUsuario();
    return res.send(html);
  },
  createUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const newUser = await User.create({ email, password });
      if (!newUser) {
        return res.status(500).send("error creando el usuario");
      }
      return res.redirect("/login");
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.message);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    //verificar si es admin
    if (
      email === process.env.ADMIN_USER &&
      password === process.env.ADMIN_PASSWORD
    ) {
      req.session.isLogged = true;
      req.session.isAdmin = true;
      console.log("logged admin");
      return res.redirect("/dashboard");
    }
    const user = await User.findOne({ email });
    if (!user) {
      req.session.isLogged = false;
      return res.status(401).send("usuario  o clave incorrecto");
    }
    //verificamos password
    if (user.password !== password) {
      req.session.isLogged = false;

      return res.status(401).send("usuario  o clave incorrecto");
    }
    req.session.isLogged = true;
    req.session.isAdmin = false;
    console.log("logged user " + user.email);

    return res.redirect("/dashboard");
  },
};

module.exports = authController;
