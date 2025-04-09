const express = require('express');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();


mongoose.connect(process.env.DATABASE)
    .then(() =>  console.log('connected to mongo database ...'))
    .catch((err) =>  console.log('database not connected ...'))



app.get('/', (req, res) => {
    res.send('hello ....')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is running on port  ${port}`);
})