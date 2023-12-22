const Users = require('./users-model')


const router = require('express').Router()




router.get('/', (req, res, next) => {
res.json({message:'get is working correctly'})
})

router.post('/', (req, res, next) => {
    res.json({message:'post is working correctly'})
})


module.exports = router