const express = require('express');
const app = express();
const shelterroutes = require('./Routes/shelter')
const dogroutes = require('./Routes/dogs')
const adminroutes = require('./Routes/admin')

app.use('/shelters', shelterroutes)
app.use('/dog', dogroutes)
app.use('/path', adminroutes)

app.listen(3000, () => {
    console.log('listening at port 3000!!');
})