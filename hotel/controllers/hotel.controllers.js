const hotelService = require("../services/hotel.service");
// const {Hotel} = require('../../model/hotel');

function getHotel(_req, res) {
  res.send({
    hotel: hotelService.getHotel(),
  });
}

function getChambres(_req, res) {
  res.send({
    chambres: hotelService.getChambres(),
  });
}

module.exports = {
  getHotel,
  getChambres,
};
