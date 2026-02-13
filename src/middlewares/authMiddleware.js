const User = require("../models/User");

const auth = (req, res, next) => {
  if (!req.session.isLogged) {
    return res.redirect("/login");
  }
  next();
};

module.exports = auth;
