const { add } = require('./Controller');

const express = require('express');

const route = express.Router();

route.post('/registered', add);

module.exports = route;