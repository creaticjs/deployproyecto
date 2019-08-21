const mongo = require("mongoose");

mongo.Promise = global.Promise;

module.exports = {
  conectar: async app => {
    await mongo.connect("mongodb://localhost/bootcamp", {
      useNewUrlParser: true
    });

    app.listen(9000, () => {
      console.log("Conectamos mongo y el servidor nodeJS 🧠");
    });
  }
};
