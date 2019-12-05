const Sequelize = require("sequelize");
const databaseUrl =
  "postgres://postgres:x28t5xd9yb6fnj@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);
db.sync()
  .then(console.log("Database connected"))
  .catch(console.error); //check this line

module.exports = db;
