const express = require("express");
const routes = express.Router();
const clientController = require("../controllers/client.controller");

routes.get("", clientController.getClients(req, res));

routes.get("/chambres", clientController.getChambres(req, res));

module.exports = {
  routes,
};
