const express = require("express");
const router = express.Router();

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

  res.json({ status: 200, message: "Login successful" });
});

module.exports = router;
