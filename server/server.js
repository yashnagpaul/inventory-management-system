const express = require('express');
const app = express();

const cors = require('cors');

// Middleware
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors()); 

// Root url
app.get('/', (req, res) => {
    res.json(`Hello World!`);
});

// Listening on port 5000
app.listen(5000, () => { console.log('Listening at: http://localhost:5000')});