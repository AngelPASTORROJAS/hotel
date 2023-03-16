const express = require("express");
const hotelRoute = require('./hotel/routes/hotel.route');
const clientRoute = require('./clients/routes/client.route');

const app = express();

app.use('/hotel', hotelRoute.routes);
app.use('/client', clientRoute.routes);

// const bodyParser = require("body-parser");
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server started on port 3000. \r\nhttp://localhost:3000`);
});
