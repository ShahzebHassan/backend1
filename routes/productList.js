const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/' , async(req,res) => {
   try{
        const aliens = await Alien.find()
        res.json(aliens)
   }
   catch(err){
       res.send('Error' + err)
   }
})

router.get('/:id' , async(req,res) => {
    try{
         const alien = await Alien.findById(req.params.id)
         res.json(alien)
    }
    catch(err){
        res.send('Error' + err)
    }
 })

router.post('/', async(req,res) => {
    const alien = new Alien({
        Name: req.body.Name,
        Quantity: req.body.Quantity,
        Price: req.body.Price
    })
   try{
        const a1 = await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.Quantity = req.body.Quantity,
        alien.Name = req.body.Name,
        alien.Price = req.body.Price
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        // alien.Quantity = req.body.Quantity
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

module.exports = router