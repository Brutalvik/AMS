const express = require("express");
const db = require("../../db/config");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  if (!user.email.includes("@")) {
    res.json({ status: 400, error: "Invalid email address" });
  }
  if (!user.email || !user.password) {
    res.json({ status: 400, error: "Value cannot be blank" });
  }

  db.query(
    `SELECT * FROM users WHERE email = '${user.email}'`,
    (err, result) => {
      const found = result.some((login) => login.email === user.email);
      const password = result[0].password;
      console.log("step 1 " + found);
      if (found) {
        bcrypt.compare(user.password, password, (err, result) => {
          if (err) throw err;
          if (result) {
            console.log("step 2 password verified");
            jwt.sign(user, password, { expiresIn: "3600s" }, (err, token) => {
              if (err) throw err;
              console.log(token);
              res.json({ auth: "Bearer ", token: token });
              // res.cookie("token", token, {
              //   httpOnly: true,
              //   secure: true,
              //   maxAge: 36000,
              // });
            });
          }
        });
      } else {
        res.json({ status: 400, error: "Wrong Password" });
      }
    }
  );
});

module.exports = router;
