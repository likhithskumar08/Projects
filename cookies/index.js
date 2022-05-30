const express = require('express');
const app = express();

cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));


app.get('/greet', (req, res) =>{
    const {name = 'anonymous'} = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get('/setname', (req, res) =>{
    res.cookie('name', 'Kumar');
    res.cookie('name', 'Prahladha');
    res.send('Sent a new cookie!')
})

app.get('/getsignedcookie', (req, res) =>{
    res.cookie('fruit', 'grape', {signed : true})
    res.send('signed the cookie')
})

app.get('/verifyfruit', (req, res) =>{
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () =>{
    console.log('listening at the port 3000!')
})