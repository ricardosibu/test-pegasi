'use strict'

const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    sex: String,
    pregnant: Boolean,
    phone: String
});

module.exports = mongoose.model('Person', PersonSchema);