const express = require('express');
const { add, getdata, deletedata, update } = require('./Controller');

const route = express.Router();

route.post('/adduser', add);

route.get('/getuser', getdata);

route.delete('/deleteuser/:id', deletedata);

route.put('/updateuser/:_id', update);

module.exports = route;