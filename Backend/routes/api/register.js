const express = require("express");
const router = express.Router();
const uuid = require("uuid");

router.post("/", (req, res) => {
  const user = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob,
    status: "active",
    isAuthenticated: false,
    isLoggedIn: false,
  };

  if (!user.name || !user.email || !user.password || !user.dob) {
    return res.status(400).json({ error: "Value cannot be blank" });
  }

  //send to database

  //get response from database
  res.json({ user: user, message: "Registration Successful" });
});

module.exports = router;
