const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    heroId: {
        type: String,
        required: true
    },
    heroName: {
        type: String,
        required: true

    },
    primary_attr: {
        type: String
    },
    goodWith: {},
    badAgainst: {}
})

module.exports = mongoose.model('Hero',heroSchema,'heroes');