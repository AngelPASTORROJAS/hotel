/* Importing the Client and ClientList classes from the client.js file. */
const { Client, ClientList } = require("../../model/client");

const clientService = require("../services/clients.service");

function getClients(_req, res) {
  res.send(clientService.getClients());
}

function getClientById(req, res) {
  res.send(clientService.getClientById(req.params.id));
}

module.exports = {
  getClients,
  getClientById,
};
