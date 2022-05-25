const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Alien1 = require('../models/alien1')

router.get('/' , async(req,res) => {
   try{
        const user = await Alien1.find()
        res.json(user)
   }
   catch(err){
       res.send('Error' + err)
   }
})

router.get('/:id' , async(req,res) => {
    try{
         const alien1 = await Alien1.findById(req.params.id)
         res.json(alien1)
    }
    catch(err){
        res.send('Error' + err)
    }
 })

router.post('/', async(req,res) => {
    const alien1 = new Alien1({
        Username: req.body.Username,
        Address: req.body.Address,
        Email: req.body.Email
    })
   try{
        const a1 = await alien1.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const alien1 = await Alien1.findById(req.params.id)
        alien1.Email = req.body.Email,
        alien1.Username = req.body.Username,
        alien1.Address = req.body.Address
        const a1 = await alien1.save()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

router.delete('/:id',async(req,res)=> {
    try{
        const alien1 = await Alien1.findById(req.params.id)
        // alien.Quantity = req.body.Quantity
        const a1 = await alien1.remove()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

module.exports = router