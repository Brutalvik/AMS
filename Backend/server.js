const express = require("express");
const app = express();

const uuid = require("uuid");

const PORT = process.env.PORT || 8000;

//json body parser
app.use(express.json());
//handling url encoded data
app.use(express.urlencoded({ extended: false }));

app.post("/api/register", (req, res) => {
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

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
