const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/Farmstand')
    .then(() => {
        console.log('Mongo Connection open!');
    }).catch(err => {
        console.log('Oh no connection Error!');
        console.log('err');
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/products', async (req, res) => {
    const products = await product.find({})
    // console.log(products)
    res.render('products/index', { products })
})
app.get('/products/new', (req, res) => {
    res.render('products/new');
})
//setting up the route for submit
app.post('/products', async (req, res) => {
    const newProduct = new product(req.body);//should be product not prosucr1 or Product
    await newProduct.save();
    console.log(newProduct);
    // console.log(req.body);// the entried user make will be printed out at terminal 
    res.redirect(`/products/${newProduct._id}`)//after submitting this will be shown in webpage, we have used string literals
})


//show.js
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product1 = await product.findById(id);// product is defined in product.js, will be imported to seeds.js and in seeds.js the array is appended to product. here we are searching product by single id. and assigning it to new product1 variable.
    console.log(product1)
    // res.send('Details page!')
    res.render('products/shows', { product1 }) //RENDER shows.js from input product1
})

// edit
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product2 = await product.findById(id);// product is defined in product.js, will be imported to seeds.js and in seeds.js the array is appended to product. here we are searching product by single id. and assigning it to new product1 variable.
    console.log(product2)
    // res.send('Details page!')
    res.render('products/edit', { product2 }) //RENDER shows.js from input product1
})

app.listen(4000, () => {
    console.log("App is listening on port 4000!")
})