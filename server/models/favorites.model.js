const mongoose = require('mongoose');

const FavoritesSchema = mongoose.Schema({
    userName: String,
    pokemonName: String,
    idUser:mongoose.Schema.Types.ObjectId,
    PokemonID: String,
         
},{collection: 'favorites'});

const Favorites = mongoose.model("favorites", FavoritesSchema);

module.exports = Favorites;