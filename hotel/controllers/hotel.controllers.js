/* Importing the hotelService module. */
const hotelService = require("../services/hotel.service");

/**
 * It takes a request and a response, and sends a response with a hotel object
 * @param _req - The request object.
 * @param res - The response object.
 */
function getHotel(_req, res) {
  res.send(hotelService.getHotel());
}

/**
 * It takes a request and a response, and sends a response with the chambres
 * @param _req - The request object.
 * @param res - The response object.
 */
function getChambres(_req, res) {
  res.send(hotelService.getChambres());
}

/* Exporting the functions getHotel and getChambres. */
module.exports = {
  getHotel,
  getChambres,
};
