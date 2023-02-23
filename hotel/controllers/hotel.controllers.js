const hotelService = require("../services/hotel.service");
// const {Hotel} = require('../../model/hotel');

function getHotel(req, res) {
  res.send({
    hotel: hotelService.getHotel(),
  });
}

function getChambres(req, res) {
  res.send({
    chambres: hotelService.getChambres(),
  });
}

module.exports = {
  getHotel,
  getChambres,
};
