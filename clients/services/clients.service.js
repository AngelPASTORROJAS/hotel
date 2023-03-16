/* Importing the Client and ClientList classes from the client.js file. */
const { Client, ClientList } = require("./../../model/client");

/* Importing the client.json file. */
const clientJson = require("../../data/client.json");

/* Calling the function to create the variable dataClient. */
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
 * It returns the first client object in the clients array whose id property is equal to the id
 * argument
 * @param {string} id - The id of the client you want to get.
 * @returns {Client | undefined} The client object with the id of 1.
 */
function getClientById(id) {
  return dataClient.clients.find((client) => (client.id = id));
}

/* Exporting the functions getClients and getClientById. */
module.exports = {
  getClients,
  getClientById,
};
