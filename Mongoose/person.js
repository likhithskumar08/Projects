const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/person')
    .then(() => {
        console.log('Connection open!');
    }).catch(err => {
        console.log('error!');
        console.log('err');
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})

const person = mongoose.model('person', personSchema);

