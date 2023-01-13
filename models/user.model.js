const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let Users = new Schema({
    phone: String,
    email: String,
    name: String,
    city: String
})

module.exports = mongoose.model('Users', Users)