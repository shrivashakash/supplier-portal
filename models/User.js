const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mobile: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

// Export the user model
const User = mongoose.model('user', userSchema);
module.exports = User;