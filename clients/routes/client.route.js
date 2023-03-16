/* Importing the express module and creating a router object. */
const express = require("express");
/* Creating a router object. */
const routes = express.Router();

/* Importing the clientController.js file. */
const clientController = require("../controllers/client.controller");

/* This is a route that will be used to get all the clients. */
routes.get("", function (req, res) {
  clientController.getClients(req, res);
});

/* This is a route that will be used to get a client by id. */
routes.get("/:id", function (req, res) {
  clientController.getClientById(req, res);
});

/* Exporting the routes object. */
module.exports = {
  routes,
};
