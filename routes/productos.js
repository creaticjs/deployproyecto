const productoController = require("../controllers/productos");

module.exports = app => {
  app.get("/api/prueba", (req, res) => {
    res.send("Mi super servidor en Express y mongo 🤮");
  });
  app.get("/api/productos", productoController.allProductos);
  app.post("/api/producto", productoController.createProducto);
  //app.post("/updateusuario", userController.updateUser);
};
