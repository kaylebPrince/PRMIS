const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BloodBankSchema = new Schema({
    id: ObjectId,
    created_at: Date,

    donor_information:{
        full_name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
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

    storage_information: {
        method_of_storage: {
            type: String,
            required: true
        },
        temperature: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        specialhandling_instructions:{
            type: String,
            required: true
        },
    },

    inventory_information: {
        expiry_date: {
            type: Date,
            required: true
        },
        lot_number: {
            type: Number,
            required: true
        }
    },

    transfusion_information: {
        date_of_transfusion: {
            type: String,
            required: true        
        },
        recipient: {
            type: String,
            required: true
        },
    }
})

module.exports = mongoose.model('bloodBank', BloodBankSchema);