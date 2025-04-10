const express = require('express');
const router = express.Router()

// Import contoller method
const {salam} = require('../controllers/userController');


router.get('/', salam)




module.exports = router;