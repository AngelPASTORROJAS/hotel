const express = require("express");
const routes = express.Router();
const hotelControllers = require("../controllers/hotel.controllers");

routes.get("", function (req, res) {
  hotelControllers.getHotel(req, res);
});

routes.get("/chambres", function (req, res) {
  hotelControllers.getChambres(req, res);
});

module.exports = {
  routes,
};
