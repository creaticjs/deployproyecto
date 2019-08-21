const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./db/connectionMongo");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", express.static(__dirname + "/public"));

const routeUsers = require("./routes/users")(app);
const routeProductos = require("./routes/productos")(app);
mongo.conectar(app);
