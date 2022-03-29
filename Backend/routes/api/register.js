const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  //Hash Password
  const saltedPassword = await bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      return hash;
    });

  const user = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    password: saltedPassword,
    dob: req.body.dob,
    status: "active",
    isAuthenticated: false,
    isLoggedIn: false,
  };

  if (!user.name || !user.email || !user.password || !user.dob) {
    return res.status(400).json({ error: "Value cannot be blank" });
  }

  //get response from database
  res.json({ user: user, message: "Registration Successful" });
});

module.exports = router;
