const mongoose = require('mongoose')

const Register = mongoose.Schema({
    fname:String,
    email:String,
    mobile:Number,
    address:String,
    city:String
})

module.exports = mongoose.model('user', Register);