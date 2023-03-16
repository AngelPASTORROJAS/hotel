const express = require("express");
const routes = express.Router();
const clientController = require("../controllers/client.controller");

routes.get("", function (req, res) {
  clientController.getClients(req, res);
});

routes.get("/:id", function (req, res) {
  clientController.getClientById(req, res);
});

module.exports = {
  routes,
};
