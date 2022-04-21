const router = require("express").Router();

router.use("/crud", require("./crud.js"));

module.exports = router;
