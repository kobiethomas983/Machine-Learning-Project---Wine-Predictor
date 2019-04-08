const express = require("express");
const morgan = require("morgan");
const path = require("path");
const PORT = 3500;
const seedDB = require("./db/seed");
const db = require("./db/database");

const app = express();
app.use(morgan("dev")); //middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api"));

const startServerConnectDB = async () => {
  await db.sync({ force: true });
  console.log("db synced");
  await seedDB();
  console.log("seeded!");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

startServerConnectDB();
