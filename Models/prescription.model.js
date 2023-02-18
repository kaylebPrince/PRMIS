const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PrescriptionSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    full_name:{
        type: String,
        required: true,
    },
    date_of_birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date_of_prescription: {
        type: Date,
        required: true
    },
    medication:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    authorized_refills: {
        type: String,
        required: true
    },
    prescriber_information:{
        type: String,
        required: true
    },
})


module.exports = mongoose.model('prescription', PrescriptionSchema);