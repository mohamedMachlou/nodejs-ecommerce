const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            minlength: 4,
            maxlength: 50,
            trim: true,
            required: true
        },

        email: {
            type: String,
            email: true,
            trim: true,
            required: true,
            unique: true,
        },
        salt:{
            tyoe: String
        },
        about:{
            tyoe: String,
            trim: true
        },
        role: {
            type: Number,
            default: 0
        },
        history: {
            type: Array,
            default: [],
        }

}, {timestamps: true})