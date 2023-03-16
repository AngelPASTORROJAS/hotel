// import { Hotel } from "../../model/hotel";
const hotelJson = require("../../data/hotel.json");

const hotel = getHotel();

function getHotel() {
  const str = JSON.stringify(hotelJson);
  const obj = JSON.parse(str);
  return obj;
}

function getChambres() {
  return getHotel().rooms;
}

module.exports = {
  getHotel,
  getChambres,
};
