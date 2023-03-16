/* Importing the Client and ClientList classes from the client.js file. */
const { Client, ClientList } = require('./../../model/client');

/* Importing the client.json file. */
const clientJson = require("../../data/client.json");

/* Calling the function       the variable getClients. */
const dataClient = getClients();

/**
 * It takes the JSON string and converts it to a ClientList.
 * @returns {ClientList} all data of client.json
 */
function getClients() {
  const str = JSON.stringify(clientJson);
  const obj = JSON.parse(str);
  return obj;
}

/**
 * It returns the client object from the clients array that has the same id as the id parameter
 * @param {number} id - The id of the client you want to get.
 * @returns {Client | undefined} the result of the find function.
 */
function getClientById(id) {
  return dataClient.clients.find(client=>{client.id = id});
}

module.exports = {
  getClients,
  getClientById,
};
