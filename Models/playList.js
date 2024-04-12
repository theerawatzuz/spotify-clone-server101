const mongoose = require('mongoose')

const playListSchema = mongoose.Schema({
    namePlayList: String,
    picPlayList:String,
    songPlayList: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('playList', playListSchema)