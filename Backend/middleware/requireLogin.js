const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({
      error: "You must log in",
    });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      res.status(401).json({ error: "You must be logged in" });
    }

    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
