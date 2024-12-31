const mongoose = require('mongoose')

const Register = mongoose.Schema({
    fname:String,
    email:String,
    mobile:Number,
    address:String,
    city:String,
    gender:String,
    subject: {
        type:[[String]],
        required:true
    }
})

module.exports = mongoose.model('user', Register);