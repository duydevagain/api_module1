const mongoose = require('mongoose');
const passport = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    userid : Int32Array,
    username : String,
    password : String,
    role : String
});

userSchema.plugin(passport);
const user = mongoose.model('user', userSchema);

module.exports = user;