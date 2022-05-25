const express = require('express');
// const app = express();
const mongoose = require('mongoose')
const product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/Farmstand')
    .then(() => {
        console.log('Mongo Connection open!');
    }).catch(err => {
        console.log('Oh no connection Error!');
        console.log('err');
    });

// const p = new product({
//     name: 'Grape',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p);
//     }) // promise
//     .catch(e => {
//         console.log(e);
//     })

const seedProducts = [
    {
        name: 'sherlock holmes',
        price: 5.99,
        category: 'book'
    },
    {
        name: 'shavarma',
        price: 3.99,
        category: 'food'
    },
    {
        name: 'Lenovo altair',
        price: 699.99,
        category: 'laptop'
    }

]

product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })