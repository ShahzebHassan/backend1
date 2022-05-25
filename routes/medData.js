const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Alien2 = require('../models/alien2')

router.get('/' , async(req,res) => {
   try{
        const med = await Alien2.find()
        res.json(med)
   }
   catch(err){
       res.send('Error' + err)
   }
})

router.get('/:id' , async(req,res) => {
    try{
         const alien2 = await Alien2.findById(req.params.id)
         res.json(alien2)
    }
    catch(err){
        res.send('Error' + err)
    }
 })

router.post('/', async(req,res) => {
    const alien2 = new Alien2({
        Medicinename: req.body.Medicinename,
        Address: req.body.Address,
        Brand: req.body.Brand
    })
   try{
        const a1 = await alien2.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const alien2 = await Alien2.findById(req.params.id)
        alien2.Medicinename = req.body.Medicinename,
        alien2.Brand = req.body.Brand,
        alien2.Address = req.body.Address
        const a1 = await alien2.save()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

router.delete('/:id',async(req,res)=> {
    try{
        const alien2 = await Alien2.findById(req.params.id)
        // alien2.Quantity = req.body.Quantity
        const a1 = await alien2.remove()
        res.json(a1)
    }catch(err){

        res.send('Error')
    }
    
})

module.exports = router