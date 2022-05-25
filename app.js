const express = require('express')
const mongoose = require('mongoose')
const alien= require('./models/alien')
const url = 'mongodb://localhost/AlienDBex'
const cors = require('cors'); 
const app = express();app.use(cors());
const bcrypt = require("bcryptjs");

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/signupUsers')
app.use('/signupUsers',userRouter)

const alienRouter = require('./routes/productList')
app.use('/productList',alienRouter)

const alien1Router = require('./routes/userData')
app.use('/userData',alien1Router)

const alien2Router = require('./routes/medData')
app.use('/medData',alien2Router)


app.listen(9000, () => {
    console.log('Server started')
})