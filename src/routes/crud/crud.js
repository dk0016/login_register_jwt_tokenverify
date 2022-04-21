const router = require("express").Router();
const sql = require("../../db/connection.js");

router.post("/", async (req, res) => {
  try {
    const results = await sql(`INSERT into biodata_details SET ?`, [req.body]);
    if (results)
      return res.status(200).send("added biodata_details page successfully");
    throw new Error("Couldn't get biodata_details Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("/", async (req, res) => {
  try {
    const results = await sql(`SELECT * from biodata_details`);
    if (results) return res.status(200).send(results);
    throw new Error("Couldn't get biodata_details Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`SELECT * from biodata_details where id=?`, [ID]);
    if (results) return res.status(200).send(results);
    throw new Error("Couldn't get biodata_details Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.put("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`UPDATE biodata_details SET ? where id=?`, [
      req.body,
      ID,
    ]);
    if (results)
      return res
        .status(200)
        .send(`upadted biodata_details data id ${ID} successfully`);
    throw new Error("Couldn't update biodata_details Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const results = await sql(`DELETE from biodata_details where id=?`, [ID]);
    if (results)
      return res
        .status(200)
        .send(`deleted biodata_details data id ${ID} successfully`);
    throw new Error("Couldn't update biodata_details Data");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = router;
