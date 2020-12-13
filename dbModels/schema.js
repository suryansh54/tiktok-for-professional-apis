const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    browser: String,
    browserVersion: String,
    prefferedLanguages: [String],
    connectionType: String,
    location: {
        type: {
            type: String,
            default: 'Point', // As user location represents a single point on map
            enum: ['Point']
        },
        coordinates: [Number], // latitude, longitude
        accuracy: Number,
    },
    userInterest: [{
        general: String,
        specific: [String]
    }],
    creationDate: Date

});

const user = mongoose.model('User', userSchema);

module.exports = user;
