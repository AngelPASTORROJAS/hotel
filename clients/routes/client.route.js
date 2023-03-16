const express = require("express");
const routes = express.Router();
const clientController = require("../controllers/client.controller");

routes.get("", function (req, res) {
  clientController.getClients(req, res);
});

routes.get("/chambres", function (req, res) {
  clientController.getChambres(req, res);
});

module.exports = {
  routes,
};
