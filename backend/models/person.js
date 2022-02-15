const mongoose = require('mongoose');
const Schema = mongoose.Schema
const PersonSchema = Schema({
    name: String,
    surname: String,
    age: Number,
    sex: String,
    pregnant: Boolean,
    phone: String
});

module.exports = mongoose.model('Person', PersonSchema);