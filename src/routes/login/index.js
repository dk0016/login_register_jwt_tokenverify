const router = require("express").Router();
const sql = require("../../db/connection.js");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  try {
    const { email, mobile } = req.body;
    const results = await sql(
      `SELECT * from register where email=? && mobile=?`,
      [email, mobile]
    );
    if (results && results.length) {
      const token = jwt.sign(
        {
          number: results.number,
          email: results.email,
        },
        process.env.secretKey,
        {
          algorithm: "HS256",
          expiresIn: 43200,
        }
      );
      if (token)
        return res.send({
          user: results[0],
          token,
        });
    }
    throw new Error(
      "Uable to login! please enter the email and mobile number correctly!!"
    );
  } catch (err) {
    res.status(400).send(err.message);
    console.log(err.message);
  }
});
module.exports = router;
