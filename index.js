const express = require("express");
const hotelRoute = require('./hotel/routes/hotel.route');

const app = express();

app.use('/hotel', hotelRoute.routes);

// const bodyParser = require("body-parser");
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server started on port 3000.`);
});
