const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  // endpoint: process.env.API_URL,
  // masterKey: process.env.API_KEY,
  port: process.env.PORT,
  jwtPrivateKey: "niu32y489yhn)&(*%^fjhv",
  cryptoKey: "niu32y489yhn)&(*%^fjhv",
  db: "mongodb://127.0.0.1:27017/mongoose",
};
