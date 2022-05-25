const mongoose = require('mongoose')


const alien2Schema = new mongoose.Schema({
    Medicinename: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },   
    
})

module.exports = mongoose.model('Alien2',alien2Schema)