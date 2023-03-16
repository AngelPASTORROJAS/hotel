const {Hotel, Location, Contact, Room} = require('./../../model/hotel');
const hotelJson = require("../../data/hotel.json");

const dataHotel = getHotel();

/**
 * It takes the JSON string and converts it to a JavaScript object.
 * @returns {Hotel} all data of client.json
 */
function getHotel() {
  const str = JSON.stringify(hotelJson);
  const obj = JSON.parse(str);
  return obj;
}

/**
 * It returns the rooms array from the dataHotel object.
 * @returns {Room[]} The rooms array.
 */
function getChambres() {
  return dataHotel.rooms;
}

/* Exporting the functions getHotel and getChambres. */
module.exports = {
  getHotel,
  getChambres,
};
