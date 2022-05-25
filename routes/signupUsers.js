const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const User = require('../models/user')


router.get('/' , async(req,res) => {
   try{
        const users = await User.find()
        res.json(users)
   }
   catch(err){
       res.send('Error' + err)
   }
})

         
router.post('/', async(req,res) => {
    const user = new User({
        fullname: req.body.fullname,
         email: req.body.email,
         mobile: req.body.mobile,
         password: req.body.password
    })
   try{
        const a1 = await user.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
      
module.exports = router