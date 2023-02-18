const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reportSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    full_name: {
        type: String,
        required: true,
    },
    age: {
        number: String,
    },
    gender: {
        type: String,
        required: true,
    },
    medical_history: {
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    discharge_summary: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('report', reportSchema);