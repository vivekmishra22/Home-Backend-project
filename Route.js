const express = require('express');
const { add, getdata, deletedata, update  } = require('./Controller');

const route = express.Router();

route.post('/registered', add);

route.get('/getuser', getdata);

route.delete('/deleteuser/:id', deletedata);

route.put('/updateuser/:id', update);

module.exports = route;