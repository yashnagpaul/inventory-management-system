const express = require('express');
const app = express();
const PORT = 8080;
const inventoryRoute = require('./routes/inventoryRoute');

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

// Listening on PORT
app.listen(PORT, () => { console.log(`Listening at: http://localhost:${PORT}`)});