const express = require("express");
var morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 5000;
const router = require("./routes.js");
const sequelize = require("./sequelize/models/index").sequelize;
const app = express();

sequelize.sync();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", router);
app.use(express.static(__dirname + "./client"));

app.listen(port, () => console.log(`Listening on port ${port}`));
