const productoModel = require("../models/producto");

module.exports = {
  allProductos: async (req, res) => {
    try {
      const productos = await productoModel.find();
      res.send(productos);
    } catch (error) {
      res.status(500).send({ msg: "Ocurrio un error en el servidor" });
    }
  },
  createProducto: async (req, res) => {
    try {
      const producto = req.body;
      console.log(req.body);
      const productoC = await productoModel.create(producto);
      res.send(productoC);
    } catch (error) {
      res.status(500).send({
        msg: "El producto no se pudo crear, Ocurrio un error en el servidor"
      });
    }
  }
  //   updateUser: async (req, res) => {
  //     try {
  //       const { id } = req.body;
  //       const entrada = req.body;
  //       const userUpdate = await userModel.findOneAndUpdate({ _id: id }, entrada);
  //       res.send(userUpdate);
  //     } catch (error) {
  //       res.status(500).send({
  //         msg: "El usuario no se pudo crear, Ocurrio un error en el servidor"
  //       });
  //     }
  //   }
};
