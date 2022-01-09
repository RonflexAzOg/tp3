require('./db')
const config = require('./src/config/env.config');
const router = require('./src/api/v1/router');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept, Authorization');
    // Expose the right header
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
})

//Middleware
app.use(express.urlencoded({ extended: true})); // parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(morgan(config.format_logs));
app.use(cors());

router(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port} in ${config.node_env} mode`);
})