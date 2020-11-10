const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    favoriteFoods: { type: [String] }
})

module.exports = Contact = mongoose.model('Contact', ContactSchema)