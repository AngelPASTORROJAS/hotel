
const usersService = require('../services/hotel.service');
// const {Hotel} = require('../../model/hotel');

function getHotel(req, res) {
    const hotel = usersService.getHotel();
    res.send({
        hotel: hotel
    });
}

module.exports = {
    getHotel
}