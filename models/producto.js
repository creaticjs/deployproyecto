const mongo = require("mongoose");

const productoScheme = new mongo.Schema({
  nombre: { type: String },
  precio: { type: String }
});

module.exports = mongo.model("Producto", productoScheme);
