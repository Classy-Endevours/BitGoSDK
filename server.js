const express = require('express');
const cors = require('cors');
require('dotenv').config()
require('./app')
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// setting up the PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, (req) => {
    console.log(`server is listening at PORT ${PORT}`)
});
