const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },   
    
})

module.exports = mongoose.model('Alien',alienSchema)