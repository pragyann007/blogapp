const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        minlength: 11
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = mongoose.model('User', UserSchema);
