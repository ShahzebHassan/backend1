const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});

// userSchema.pre("save",async function(next){

//     if(this.isModified("password")){
//     console.log(`current pass is ${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(`current pass is ${this.password}`);
//     }
//     next();
// })

module.exports = mongoose.model('User',userSchema)