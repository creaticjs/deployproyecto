const userModel = require("../models/user");

module.exports = {
  allUsers: async (req, res) => {
    try {
      const users = await userModel.find();
      res.send(users);
    } catch (error) {
      res.status(500).send({ msg: "Ocurrio un error en el servidor" });
    }
  },
  createUser: async (req, res) => {
    try {
      const usuario = req.body;
      console.log(req.body);
      const user = await userModel.create(usuario);
      res.send(user);
    } catch (error) {
      res.status(500).send({
        msg: "El usuario no se pudo crear, Ocurrio un error en el servidor"
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.body;
      const entrada = req.body;
      const userUpdate = await userModel.findOneAndUpdate({ _id: id }, entrada);
      res.send(userUpdate);
    } catch (error) {
      res.status(500).send({
        msg: "El usuario no se pudo crear, Ocurrio un error en el servidor"
      });
    }
  }
};
