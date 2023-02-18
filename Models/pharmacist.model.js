const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Define a Database Schema 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// Define Schema for hospital staff
const pharmacistSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    role: {
        type: String,
        required: true
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
    phone_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: [6, 'password must be at least 7 chars']
    },
    address: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});


// Code for password hashing
pharmacistSchema.pre('save', async function (next) {
    const pharmacist = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next()
});

// Input validation to ensure that the user information is correct
pharmacistSchema.methods.isValidPassword = async function(password) {
    const pharmacist = this;
    const compare = await bcrypt.compare(password, pharmacist.password);

    return compare;
};

// Export the model
module.exports = mongoose.model('pharmacistModel', pharmacistSchema);