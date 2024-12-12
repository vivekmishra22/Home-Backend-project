const { add, getdata, deletedata } = require('./Controller');

const express = require('express');

const route = express.Router();

route.post('/registered', add);

route.get('/getuser', getdata);

route.delete('/deleteuser/:id', deletedata);

module.exports = route;