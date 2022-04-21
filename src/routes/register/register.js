const router = require("express").Router();
const sql = require("../../db/connection.js");
const auth = require("../../config/verifytoken");

router.post("/", async (req, res) => {
  try {
    const results = await sql(`INSERT into register SET ?`, [req.body]);
    if (results) return res.status(200).send("registered successfully");
    throw new Error("Couldn't register");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("/", auth, async (req, res) => {
  try {
    const results = await sql(`SELECT * from register`);
    if (results) return res.status(200).send(results);
    throw new Error("Couldn't get register Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`SELECT * from register where id=?`, [ID]);
    if (results) return res.status(200).send(results);
    throw new Error("Couldn't get register Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.put("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`UPDATE register SET ? where id=?`, [
      req.body,
      ID,
    ]);
    if (results)
      return res
        .status(200)
        .send(`upadted register data id ${ID} successfully`);
    throw new Error("Couldn't update register Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`DELETE from register where id=?`, [ID]);
    if (results)
      return res
        .status(200)
        .send(`deleted register data id ${ID} successfully`);
    throw new Error("Couldn't update register Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = router;
router.get("/login/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`SELECT * from register where id=?`, [ID]);
    if (results) return res.status(200).send(results);
    throw new Error("Couldn't get register Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
