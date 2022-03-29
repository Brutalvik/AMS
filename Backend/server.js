const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

//json body parser
app.use(express.json());
//handling url encoded data
app.use(express.urlencoded({ extended: false }));
app.use("/api/register", require("./routes/api/register"));
app.use("/api/login", require("./routes/api/login"));

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
