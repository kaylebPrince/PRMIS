const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Define a Database Schema 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// Define Schema for hospital staff
const adminSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    role: {
        type: String,
        requried: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phone_number: Number,
    date_of_birth: Date,
    password: {
        type: String,
        required: true,
        minlength: [6, 'password must be at least 7 chars']
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
});


// Code for password hashing
adminSchema.pre('save', async function (next) {
    const admin = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next()
});

// Input validation to ensure that the user information is correct
adminSchema.methods.isValidPassword = async function(password) {
    const admin = this;
    const compare = await bcrypt.compare(password, admin.password);

    return compare;
};

// Export the model
module.exports = mongoose.model('adminModel', adminSchema);