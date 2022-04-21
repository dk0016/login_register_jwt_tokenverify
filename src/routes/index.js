const router = require("express").Router();
const auth = require("../config/verifytoken");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to crud" });
});
router.use("/crud", auth, require("./crud"));
router.use("/register", require("./register"));
router.use("/login", require("./login"));
module.exports = router;
