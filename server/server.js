const express = require('express');
const app = express();
const PORT = 8080;
const inventoryRoute = require('./routes/inventoryRoute');
const warehouseRoute = require('./routes/warehouseRoute');

const cors = require('cors');

// Middleware
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors()); 

// Root url
app.get('/', (req, res) => {
    res.json(`Hello World!`);
});

// Api routes
app.use("/api", inventoryRoute);
app.use("/api", warehouseRoute);

// Listening on PORT
app.listen(PORT, () => { console.log(`Listening at: http://localhost:${PORT}`)});