const db = require('../models/db')

function getBeers(req, res){
    const items=db.cervezas.find()
    res.json(items)
}

function getBeer(req, res){
    const id = req.params.id
    const item=db.cervezas.find({ _id: id})
    res.json(item)
}

function addBeer(req, res){
    db.cervezas.save(req.body);
    res.json(req.body)   
}

function deleteBeer(req, res){
    const id = req.params.id
    db.cervezas.remove({_id: id})
    res.json({mensaje: "Elemento borrado"})
}

function editBeer(req, res){
    const id = req.params.id
    db.cervezas.update({_id:id}, req.body)
    res.json(req.body)
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}