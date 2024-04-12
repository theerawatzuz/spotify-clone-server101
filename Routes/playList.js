const express = require('express')
const router = express.Router()

const { read, 
    list, 
    create, 
    update, 
    remove 
        } = require('../Controllers/playList')

//Route
router.get('/playList', list)
router.get('/playList/:id', read)
router.post('/playList', create)
router.put('/playList/:id', update)
router.delete('/playList/:id', remove)

module.exports = router