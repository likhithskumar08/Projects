const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public'))
// app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     res.send('Working!')
// })
app.get('/', (req, res) => {
    res.render('home.ejs')
})
//passing Data to templates
// app.get('/random', (req, res) => {
//     const num = Math.floor(Math.random() * 10) + 1
//     res.render('random.ejs', { rand: num })
// })
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { num: num })
})
app.get('/cats', (req, res) => {
    // const num = Math.floor(Math.random() * 10) + 1
    // res.render('random.ejs', { num : num })
    const cats = [
        'Blue', 'rocket', 'Monty', 'Ricky', 'Stephanie'
    ]

    res.render('cats.ejs', { cats })
})


app.get('/r/:subreddit/', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})