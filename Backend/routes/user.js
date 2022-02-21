const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 12).then((hashedpassword) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    });
    newUser
      .save()
      .then(() => res.status(200).json(newUser))
      .catch((err) => res.status(500).json(err));
  });
});

//Login

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(500).json({
      message: "Username not found",
    });
  } else {
    bcrypt.compare(req.body.password, user.password).then((doMatch) => {
      if (doMatch) {
        const accessToken = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1d",
          }
        );
        res.status(200).json({ user, accessToken });
      } else if (!doMatch) {
        res.status(500).json({
          message: "Username and Password did not match",
        });
      } else {
        res.status(500).json({
          message: "Password did not match",
        });
      }
    });
  }
});

module.exports = router;
