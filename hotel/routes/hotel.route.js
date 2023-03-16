/* Importing the express module. */
const express = require("express");
/* Creating a new router object. */
const routes = express.Router();
/* Importing the hotel.controllers.js file. */
const hotelControllers = require("../controllers/hotel.controllers");

/* This is a route that will be used to get the hotel. */
routes.get("", function (req, res) {
  hotelControllers.getHotel(req, res);
});

/* This is a route that will be used to get all rooms of the hotel. */
routes.get("/chambres", function (req, res) {
  hotelControllers.getChambres(req, res);
});

/* Exporting the routes object. */
module.exports = {
  routes,
};
