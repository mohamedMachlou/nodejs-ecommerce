const express = require('express');
const router = express.Router()



router.get('/', (req, res) => {
    res.json('hello  users module....')
})






module.exports = router;