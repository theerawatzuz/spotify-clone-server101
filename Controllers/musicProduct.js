const musicProduct = require('../Models/musicProduct')

exports.read = async(req, res) => {
    try{
        const id = req.params.id
        const musicProducted = await musicProduct.findOne({_id:id}).exec();
        res.send(musicProducted)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async(req, res) => {
    try{

        const musicProducted = await musicProduct.find({}).exec();
        res.send(musicProducted)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req, res) => {
    try{
        
        console.log(req.body)
        const musicProducted = await musicProduct(req.body).save()
        res.send(musicProducted)


        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req, res) => {
    try{

        const id = req.params.id
        const musicProductUpdated = await musicProduct
            .findOneAndUpdate({_id:id}, req.body, { new: true })
            .exec()
        res.send(musicProductUpdated)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req, res) => {
    try{

        const id = req.params.id
        const musicProductRemoved = await musicProduct
            .findOneAndDelete({_id:id})
            .exec()
        res.send(musicProductRemoved)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}