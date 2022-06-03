const express = require('express');
const app = express();
const user = require('./model/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/AuthDemo');
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'timewaitsfornoone' }))

app.get('/', (req, res) => {
    res.send('welcome home');

})

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    console.log(req.body);
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const User = new user({
        username,
        password: hash
    })

    await User.save();
    req.session.req_id = req._id

    res.redirect('/')

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { password, username } = (req.body);
    const User = await user.findOne({ username });
    console.log(User);
    const validpassword = await bcrypt.compare(password, User.password);
    console.log(validpassword);
    if (validpassword) {
        req.session.user_id = User._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }

})

app.post('/logout', (req, res) => {
    res.session.user._id = null;
    res.redirect('/login');

})

app.get('/secret', (req, res) => {
    res.redirect('/')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET!!!")
})

app.listen(3000, () => {
    console.log('listening at the port 3000!');
})