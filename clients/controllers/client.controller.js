/* Importing the clientService module from the clients.service.js file. */
const clientService = require("../services/clients.service");

/**
 * It takes a request and a response object, and sends the response object back to the client with the
 * result of the `getClients` function
 * @param _req - The request object.
 * @param res - The response object.
 */
function getClients(_req, res) {
  res.send(clientService.getClients());
}

/**
 * It takes a request and a response, and sends the response with the result of the
 * clientService.getClientById function, which takes the id from the request parameters
 * @param req - The request object.
 * @param res - The response object.
 */
function getClientById(req, res) {
  res.send(clientService.getClientById(req.params.id));
}

/* Exporting the functions getClients and getClientById. */
module.exports = {
  getClients,
  getClientById,
};
