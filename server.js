const express = require('express');
const cors = require('cors');
require('dotenv').config()
const bitgo = require('./app')
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// setting up the PORT
const PORT = process.env.PORT || 8001;
app.get('/', async (req, res) => {
    try {
        const port = PORT;
        const hostname = req.headers.host
        const data = await bitgo.get
        res.status(200).send({
            port,
            hostname,
            scope: data.scope
        })
    } catch (error) {
        res.status(500).send({
            error: 'Internal server error'
        })
    }
})
app.listen(PORT, () => {
    console.log(`server is listening at PORT ${PORT}`)
});
