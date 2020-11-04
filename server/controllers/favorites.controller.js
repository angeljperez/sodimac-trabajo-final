const mongoose = require('mongoose');
const Favorites = require('../models/favorites.model');
const { verifiedAuth } = require('../midlewares/authToken.midleware');
const ObjectId = mongoose.Types.ObjectId;
const jwt = require('jsonwebtoken');


const readAll = async (req, res, next) =>{
    
    
    try{
        let favorites=[];
        favorites = await Favorites.find({});
        res.status(200).json(favorites);
        console.log('--favorites--', favorites);

   

    }catch (error) {
        res.status(400).json({ error: error });
    }
}
const readOne = async (req, res, next) =>{
    try{
        let id = {_id: ObjectId(req.params.id)};
        const favorites = await Favorites.findById(id);    
       res.status(200).json(favorites)

    }catch (error) {
        res.status(400).json({ error });
    }
}
const create = async (req, res, next) =>{
    try{
        
        let id = {_id: ObjectId(req.body.idUser)};
        let fav = {idUser: id, pokemonName: req.body.pokemonName, userName: req.body.userName};
        const favoritos = new Favorites(fav);
        const savePokemon = await favoritos.save();
        res.status(201).json(savePokemon);

    }catch (error) {
        res.status(400).json({ error });
    }
}
const updateOne = async (req, res, next) =>{
    try{
        let { id } = req.params;
        const updateFav = await Favorites.update({_id: id}, req.body);
        res.status(200).json(updateFav)


    }catch (error) {
        res.status(400).json({ error });
    }
}
const deleteOne = async (req, res, next) =>{
    try{
        let { id } = req.params;

        const deleteFav = await Favorites.remove({_id: id});
        res.status(200).json(deleteFav)

    }catch (error) {
        res.status(400).json({ error });
    }
}



module.exports = {
    readAll,
    readOne,
    create,
    updateOne,
    deleteOne
}