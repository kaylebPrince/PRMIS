const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BloodDonorSchema = new Schema({
    id: ObjectId,
    created_at: Date,

    full_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
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
    email: {
        type: String,
        unique: true,
    },

    medical_history: {
        past_health_conditions: {
            type: String,
            required: true
        },
        current_health_conditions: {
            type: String,
            requried: true
        },
        surgeries: {
            type: String,
            required: true
        },
    },

    social_history: {
        alcohol: {
            type: String,
            required: true
        },
        drugs: {
            type: String,
            required: true
        },
    },

    test_results: {
        blood_type: {
            type: String,
            required: true
        },
        infectious_diseases: {
            type: String,
            required: true
        },
        other_relevant_laboratory_tests: {
            type: String,
            required: true
        }
    },

    donation_details: {
        date_of_donation: {
            type: Date,
            required: true
        },
        location_of_donation: {
            type: String,
            required: true
        },
        donation_type: {
            type: String,
            enum: ("blood", "plasma", "platelets"),
            default: "blood",
            required: true
        },
        volume_of_blood_collected: {
            type: String,
            required: true
        }
    },

    adverse_reactions: {
        type: String,
        required: false
    },

    consent: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('bloodDonor', BloodDonorSchema);