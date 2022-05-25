const express = require("express");
const app = express()
// console.dir(app);

// app.use((req, res) => {
//     console.log("We got a new request!!");
//     // console.dir(req);
//     // res.send('Hello, we got your request!')
//     res.send('<h1> This is my webpage</h1>')

// })
app.get('/', (req, res) => {
    res.send('<h2>the home page<h2>')
})
app.post('/cats', (req, res) => {
    res.send('post request to /cats, this is diffrent from get request')
})


app.get('/cats', (req, res) => {
    res.send('Meow!!')
})

app.get('/dogs', (req, res) => {
    res.send('houl!!')
})
//EXPRESS- Routing basics // Request and response objects// 

// app.get('/r/:subreddit', (req, res) => {
//     console.log(req.params);
//     res.send("this is a subreddit")
// })
//EXPRESS PATH PARAMETERS
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the postId: ${postId} Browsing the ${subreddit} subreddit<h1>`)
})
//query strings//
app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query
    if (!q) {
        res.send('Nothing found, if nothing searched')
    } else {
        res.send('<h1>Search results for : </h1>')

    }
})

app.get('*', (req, res) => {
    res.send(`i don't know this path`)
})




app.listen(9000, () => {
    console.log("listening on port 9000!")
});