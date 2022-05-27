const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const Apperror = require('./Apperror')
// app.use(morgan('common'))
app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log(req.method.toUpperCase(), req.path);
//     next();
// })
// app.use((req, res, next) => {
//     req.method = 'GET';
//     console.log(req.method, req.path);
//     next();
// })
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('dogs!')
    next();
})

// app.use((req, res, next) => {
//     const { password } = req.query;
//     if (password === 'humanlantern') {
//         next();
//     }
//     res.send('Aunthentication failed: please enter the right password or enter one')
// })
const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'humanlantern') {
        next();
    }
    // res.status(401)
    throw new Apperror(401, 'Password required')
    // throw new error('Password required')
})

app.use('/error', (req, res) => {
    chicken.fly()
})



// app.use((req, res, next) => {
//     console.log("this is the first middleware!")
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("this is the second middleware!")
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("this is the third middleware!")
//     return next();
// })


// app.get('/', (req, res) => {
//     res.send('Home')
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Home')
})
app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Woof Woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('secrets: none persay')
})

app.get('/admin', (req, res) => {
    throw new Apperror('You are not an Admin!', 403)
})

//if none of the above matched then the below code will be executed.
app.use((req, res) => {
    res.status(404).send('Not found!')
})
/*Date.now() = a string of numbers will appear which we can copy and paste at next():
const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
search : API section- application 
*/
app.use((err, req, res, next) => {
    console.log("*******************************************")
    console.log("******************error*********************")
    console.log("*******************************************")
    console.log(err);
    next(err);
})

app.use((err, req, next) => {
    const { status = 500, message = 'Something went wrong' } = err
    res.send(message);
})
// app.use((err, req, next) => {
//     const { status = 500 } = err
//     res.status(status).send('Errorrrr!!!')
// })


app.listen(3000, () => {
    console.log('listening at the port 3000!')
})