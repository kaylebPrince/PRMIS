const Joi = require("joi");

const DoctorAddSchema = Joi.object({
    role: Joi.string().required(),
    first_name: Joi.string().max(255).required(),
    last_name: Joi.string().max(255).trim(),
    username: Joi.string().alphanum().min(6).max(30).required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    DOB: Joi.date().greater('1-1-1900').less('12-31-2022').required(),
    state: Joi.string().required(),
    country: Joi.string().optional(),
    gender: Joi.string().required(),
    phone_number: Joi.string().min(11).required(),
    password: Joi.string().max(16).min(7).required(),
    createAt: Joi.date().default(Date.now),
    updateAt: Joi.date().default(Date.now)
})

const doctorUpdateSchema = Joi.object({
    firstName: Joi.string().max(255),
    lastName: Joi.string().max(255).trim(),
    username: Joi.string().alphanum().min(6).max(30).required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    DOB: Joi.date().greater('1-1-1900').less('12-31-2022'),
    state: Joi.string().required(),
    country: Joi.string(),
    phone_number: Joi.string().min(11).required(),
    password: Joi.string().max(16).min(7).required()
})


async function addDoctorValidationMW(req,res,next){
    const doctorPayload = req.body

    try {
        await DoctorAddSchema.validateAsync(doctorPayload)
        next()
    } catch (error) {
        next({
                message: error.details[0].message,
                status: 400
        })
    }
}


async function UpdateDoctorValidationMW(req,res,next){
        const doctorPayload = req.body
    
        try {
            await doctorUpdateSchema.validateAsync(doctorPayload)
            next()
        } catch (error) {
            next({
                    message: error.details[0].message,
                    status: 400
            })
        }
    }
module.exports = {
        addDoctorValidationMW,
        UpdateDoctorValidationMW
}