const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

router.get('/test',(req,res)=>{
    res.send("this is a test")
})

router.post('/addContact', (req, res) => {
    const { name, age, favoriteFoods } = req.body
    const newContact = new Contact({
        name,
        age,
        favoriteFoods
    })
    newContact.save()
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))
})

router.get('/all', (req, res) => {
    Contact.find()
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))
})
router.get('/:_id', (req, res) => {
    const {_id } = req.params
    Contact.findOne({ _id })
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))
})

router.get('/getName/:name', (req, res) => {
    const { name } = req.params
    console.log(req.params)
    Contact.findOne({ name })
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))
})

router.get('/FindContact/:_id', (req, res) => {
    const { _id } = req.params
    Contact.findById({ _id })
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))

})

router.put('/editContact/:_id', (req, res) => {
    const { _id } = req.params
    Contact.findOneAndUpdate({ _id }, { $set: req.body })
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))
})

router.get("/sort/:favoriteFoods", (req, res) => {
    const { favoriteFoods } = req.params;
    const { name } = req.params;
    Person.find({ favoriteFoods })
    .sort({ name })
    .limit(2)
    .select({age: false})
    .exec()
    .then((users) => res.send(users))
    .catch((err) => console.log(err))
})

router.delete('/deleteContact/:_id', (req, res) => {
    const { _id } = req.params
    Contact.findOneAndDelete({ _id })
        .then(contacts => res.send(contacts))
        .catch(err => console.log(err))

})



module.exports = router
