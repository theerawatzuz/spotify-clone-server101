const express = require('express')
const router = express.Router()

const { read, 
    list, 
    create, 
    update, 
    remove 
        } = require('../Controllers/musicProduct')

//Route
router.get('/musicProduct', list)
router.get('/musicProduct/:id', read)
router.post('/musicProduct', create)
router.put('/musicProduct/:id', update)
router.delete('/musicProduct/:id', remove)

module.exports = router