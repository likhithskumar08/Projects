const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    Title: String,
    Price: Number,
    Description: String,
    Location: String
})

module.exports = mongoose.model('Campground', campgroundSchema);
