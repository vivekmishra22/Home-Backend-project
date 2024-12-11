const mongoose = require('mongoose')

const Register = mongoose.Schema({
    fname:String,
    email:String,
    mobile:Number,
})

module.exports = mongoose.model('user', Register);