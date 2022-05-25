const express = require('express');
const app = express();
const path = require('path'); // must define path for ejs
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
// const { read } = require('fs');



app.use(express.urlencoded({ extended: true }))
app.use(express.json())//in order to send or work with json file this code is mandatory
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let comments = [
    {
        id: uuid(),
        username: 'suyash',
        comment: 'Good to see such a beautiful design'
    },
    {
        id: uuid(),
        username: 'suhel',
        comment: 'Good to see such a beautiful tree'
    },
    {
        id: uuid(),
        username: 'sujan',
        comment: 'Good to see such a beautiful car'
    },
    {
        id: uuid(),
        username: 'sumesh',
        comment: 'Good to see such a beautiful color combination'
    },
    {
        id: uuid(),
        username: 'surabi',
        comment: 'Good to see such a beautiful elements usage'
    },
    {
        id: uuid(),
        username: 'sushan',
        comment: 'Good to see such a beautiful preplanning design elements'
    }


]//faking comments through an array, where they should have been retrieved from a server.

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
// at localhost:3000/comments = search.

app.get('/comments/new', (req, res) => {
    res.render('comments/new');//in order to drop .ejs extension in the end we are using the viewengine, ejs at the top
})
// at localhost:3000/comments/new = search.

app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    // res.send('it worked');
    res.redirect('/comments')
})
// app.post('/comments', (req, res) => {
//     // console.log(req.body);
//     const { username, comment } = req.body;
//     comments.push({ username, comment })
//     // res.send('it worked');
//     res.redirect('/comments')
// })

// app.get('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find(c => c.id === parseInt(id)); /*req.params will be saved in cosnt id and 
//    to find the comment id we need to convert strings to number therefore we must use parseInt on id and assign it to c.id which 
//    is saved within the function. find is the method used to locate the array elements within an array, comments is an array which we 
//    in which we want to locate the elements therefore we use find method, and it will be assigned to comment. */
//     res.render('comments/show', { comment })/*the comments/show is actually the path length we must specify and {comment}
//     is waht we want find within an element of comments array */
// })
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const comment = comments.find(c => c.id === id); /*the uuid won't provide string therefore no need to use parseInt*/
    // console.log(comments);
    // console.log(comment);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment }) // '/' -not applicable
})

// patch
app.patch('/comments/:id', (req, res) => {
    // res.send('Updating something!') //if we succesfully update something this code will send this .
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundcomment = comments.find(c => c.id === id)
    // console.log(foundcomment);
    foundcomment.comment = newCommentText
    res.redirect('/comments')
})

//Delete
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/food', (req, res) => {
    res.send('get/food response');
})
app.post('/food', (req, res) => {
    const { food, qty } = req.body;
    console.log(req.body)
    res.send(`You have choosen ${food}, ${qty}`);
})



app.listen(3000, () => {
    console.log("listening on port 3000!")
})