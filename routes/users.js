const userController = require("../controllers/users");

module.exports = app => {
  app.get("/prueba", (req, res) => {
    res.send("Mi servidor en Express y mongo 🤮");
  });
  app.get("/usuarios", userController.allUsers);
  app.post("/usuario", userController.createUser);
  app.post("/updateusuario", userController.updateUser);
};
