/* Importing the express module. */
const express = require("express");
/* Importing the hotel.route.js file. */
const hotelRoute = require("./hotel/routes/hotel.route");
/* Importing the client.route.js file. */
const clientRoute = require("./clients/routes/client.route");

/* Creating an instance of the express module. */
const app = express();

/* Telling the app to use the routes defined in the hotelRoute.routes file. */
app.use("/hotel", hotelRoute.routes);
/* Telling the app to use the routes defined in the clientRoute.routes file. */
app.use("/client", clientRoute.routes);

// const bodyParser = require("body-parser");
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

/* Telling the app to listen on port 3000. */
app.listen(3000, () => {
  console.log(`Server started on port 3000. \r\nhttp://localhost:3000`);
});
