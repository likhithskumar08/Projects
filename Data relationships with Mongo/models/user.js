const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Relationship_db_demo')
.then(() => {
console.log('MONGO CONNECTION OPEN!')
})
.catch((error) =>{
    console.log('Error!')
    console.log(error);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false }, /* it will treated as separate schema and in order to remove id we use this code */ 
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '358 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}

// addAddress('/*place id adress here*/')
