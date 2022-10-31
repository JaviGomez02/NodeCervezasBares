const db = require('../models/db')

function getBares(req, res){
    const bares=db.bares.find()
    res.json(bares)
}

function getBar(req, res){
    const id = req.params.id
    const item=db.bares.find({ _id: id})
    res.json(item)
}

function addBar(req, res){
    db.bares.save(req.body)
    res.json(req.body)   
}

function deleteBar(req, res){
    const id = req.params.id
    db.bares.remove({_id: id})
    res.json({mensaje: "Elemento borrado"})
}

function editBar(req, res){
    const id = req.params.id
    db.bares.update({_id:id}, req.body)
    res.json(req.body)
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar}