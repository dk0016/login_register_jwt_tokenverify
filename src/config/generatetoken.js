const jwt = require("jsonwebtoken");

const gerateAuthToken = (login) => {
  console.log("token generated");
  console.log(login);
  const token = jwt.sign(
    {
      id: login.id,
      email: login.email,
    },
    process.env.secretKey,
    {
      algorithm: process.env.algorithm,
      expiresIn: 43200,
    }
  );
  return token;
};

module.exports.gerateAuthToken = gerateAuthToken;
