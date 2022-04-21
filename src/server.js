const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./config/verifytoken");
require("dotenv").config();
app.use(cors(), express.json(), express.urlencoded({ extended: true }));
app.use("/", require("./routes"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
