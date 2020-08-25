const express = require('express');
const app = express();
const PORT = 8080;
const inventoryRoute = require('./route/inventoryRoute');

const cors = require('cors');

// Middleware
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors()); 

// Root url
app.get('/', (req, res) => {
    res.json(`Hello World!`);
});

// Api route
app.use("/api", inventoryRoute);

// Listening on port 5000
app.listen(PORT, () => { console.log('Listening at: http://localhost:5000')});