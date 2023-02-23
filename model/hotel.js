class Hotel {
  /**
   * The constructor function is a function that is called when a new object is created.
   * @param {String} name - The name of the hotel
   * @param {Location} location - The location of the hotel
   * @param {Contact} contact - The contact of the hotel
   * @param {String[]} facilities - array of strings
   * @param {Room[]} rooms - an array of room objects
   */
  constructor(name, location, contact, facilities, rooms) {
    this.name = name;
    this.location = location;
    this.contact = contact;
    this.facilities = facilities;
    this.rooms = rooms;
  }
}

class Location {
  /**
   * The constructor function is a special function that is used to create and initialize an object
   * created within a class.
   * @param {String} address - The street address of the location.
   * @param {String} city - The city of the address.
   * @param {String} state - The state or province of the address.
   * @param {String} zip - The zip code of the address.
   * @param {String} country - The country of the address.
   */
  constructor(address, city, state, zip, country) {
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }
}

class Contact {
  /**
   * The constructor function is a special function that is used to create and initialize an object
   * created within a class.
   * @param {String} phone - The phone number of the user.
   * @param {String} email - The email address of the user.
   */
  constructor(phone, email) {
    this.phone = phone;
    this.email = email;
  }
}

class Room {
  /**
   * The constructor function is a function that is called when an object is created from a class.
   * @param {Number} id - The unique id of the room.
   * @param {Number} number - The room number.
   * @param {String} name - The name of the room.
   * @param {String} description - The description of the room.
   * @param {Number} capacity - number of people the room can hold
   * @param {Number} price - number
   */
  constructor(id, number, name, description, capacity, price) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.description = description;
    this.capacity = capacity;
    this.price = price;
  }
}
