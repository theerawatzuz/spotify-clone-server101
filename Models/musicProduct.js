const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    nameSong: String,
    nameAlbum:String,
    nameArtist: String,
    picAlbum: String,
    playTime: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('musicProduct', productSchema)