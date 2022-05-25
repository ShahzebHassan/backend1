const mongoose = require('mongoose')


const alien1Schema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },   
    
})

module.exports = mongoose.model('Alien1',alien1Schema)