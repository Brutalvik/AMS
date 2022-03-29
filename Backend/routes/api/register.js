const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../../db/config");

router.post("/", async (req, res) => {
  //Hash Password
  const saltedPassword = await bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      return hash;
    });

  const user = {
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

  db.query(
    `INSERT INTO users (name, email, password, dob, status) VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.dob}', '${user.status}')`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );

  res.json({ status: 200, message: "Registration Successful", data: user });
});

module.exports = router;
