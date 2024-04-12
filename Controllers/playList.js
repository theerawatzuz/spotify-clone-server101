const playList = require('../Models/playList')

exports.read = async(req, res) => {
    try{
        const id = req.params.id
        const playListReadOne = await playList.findOne({_id:id}).exec();
        res.send(playListReadOne)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async(req, res) => {
    try{

        const playListReadAll = await playList.find({}).exec();
        res.send(playListReadAll)
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
        const playListCreate = await playList(req.body).save()
        res.send(playListCreate)


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
        const playListUpdate = await playList
            .findOneAndUpdate({_id:id}, req.body, { new: true })
            .exec()
        res.send(playListUpdate)
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
        const playListRemove = await playList
            .findOneAndDelete({_id:id})
            .exec()
        res.send(playListRemove)
        // code
    } catch (err) {

        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}