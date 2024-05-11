const mongoose = require('mongoose')
const Numero = mongoose.model('Numero', {
    numero: Number,
    extenso: String
})

module.exports = Numero