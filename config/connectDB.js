const mongoose = require('mongoose')
const config = require('config')


const connectDB = () => {
    mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Mongoose connected"))
        .catch((err) => console.log("Mongoose not connected"))
}

module.exports = connectDB

