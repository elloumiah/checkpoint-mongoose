const express = require('express')
const app = express()
const router = require('./routes/contact')

const connectDB = require('./config/connectDB')


app.use(express.json())



app.use("/contacts", router)





connectDB()

const port = process.env.PORT || 5000
app.listen(port, (error) => {
    error ? console.log("Connection failed") : console.log(`Server in running on port ${port}`)
})
