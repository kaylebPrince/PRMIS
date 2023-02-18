const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppointmentSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    patientName:{
        type: String,
        required: true,
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
    address: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true
      },
    DOB: {
        type: Date,
        required: true,
    },
    reason_for_appointment: {
        type: String,
        required: true
    },
    preferred_appointment_date_and_time: {
        type: String,
        required: true
    },
    medical_history_and_current_medications: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('appointment', AppointmentSchema);