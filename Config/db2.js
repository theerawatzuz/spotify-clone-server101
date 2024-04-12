const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://nimda:1234@cluster0.j6uumi3.mongodb.net/spotifyClone')
        console.log('spotifyCloneDB Connected')
    } catch {
        console.log(err)
    }
}

module.exports = connectDB