const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({ secret: 'secret_1', resave: false, saveUninitialized: true }));

app.get('/viewcount', (req, res) => {
    // res.send('you have x number of viewers');
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Hi! Welcome ${username}`);
})

app.listen(3000, (req, res) => {
    console.log('listening at the port 3000!');
})
