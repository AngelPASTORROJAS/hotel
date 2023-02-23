// import { Hotel } from "../../model/hotel";
const hotelJson = require('../../data/hotel.json');

function getHotel() {
    const str = JSON.stringify(hotelJson);
    const obj = JSON.parse(str);
    console.log(obj);
    return obj;
}

module.exports = {
    getHotel
}