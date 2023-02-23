const express = require('express');
const routes = express.Router();
const hotelControllers = require('../controllers/hotel.controllers');

routes.get('', function(req, res) {
    hotelControllers.getHotel(req, res);
});

module.exports = {
    routes
}
