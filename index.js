const express = require('express');
const mongoose = require('mongoose');

// Import Routes
const userRoute = require('./routes/userRoute')

// Config app
const app = express();
require('dotenv').config();

// connect to database
mongoose.connect(process.env.DATABASE)
    .then(() =>  console.log('connected to mongo database ...'))
    .catch((err) =>  console.log('database not connected ...'))

// Routes middleware
app.use('/api/users', userRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is running on port  ${port}`);
})