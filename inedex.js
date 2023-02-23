const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
