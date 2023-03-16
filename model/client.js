class Client {
  /**
   * The constructor function is a special function that is used to create and initialize an object
   * created within a class.
   * @param {Number} id - The id of the contact.
   * @param {String} name - The name of the contact.
   * @param {String} email - The email address of the user.
   * @param {String} phone - The phone number of the contact.
   */
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ClientList {
  /**
   * The constructor function takes an array of objects as an argument, and then maps over the array,
   * creating a new Client object for each object in the array, and then returns the array of Client
   * objects.
   * @param {Client[]} clients - an array of objects that contain the following properties:
   */
  constructor(clients) {
    this.clients = clients.map(
      (client) => new Client(client.id, client.name, client.email, client.phone)
    );
  }
}

// Export the classes for other files to use
module.exports = {
  Client,
  ClientList
};