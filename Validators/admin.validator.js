const Joi = require("joi");

const adminAddSchema = Joi.object({
    first_name: Joi.string()
            .max(255)
            .required(),
    last_name: Joi.string()
            .max(255)
            .trim(),
    username: Joi.string()
            .alphanum()
            .min(6)
            .max(30)
            .required(),
    DOB: Joi.date()
            .greater('1-1-1900')
            .less('12-31-2022')
            .required(),
    country: Joi.string()
            .optional(),
    gender: Joi.string()
            .required(),
    phone_number: Joi.number()
            .max(11).min(11).required(),
    password: Joi.string()
            .max(16).min(7).required(),
    createAt: Joi.date()
            .default(Date.now),
    updateAt: Joi.date()
            .default(Date.now)
})

const adminUpdateSchema = Joi.object({
    firstName: Joi.string()
            .max(255),
    lastName: Joi.string()
            .max(255)
            .trim(),
    DOB: Joi.date()
            .greater('1-1-1900')
            .less('12-31-2022'),
    country: Joi.string(),
    phone_number: Joi.number()
            .max(11).min(11).required(),
    password: Joi.string()
            .max(16).min(7).required()
})


async function addAdminValidationMW(req,res,next){
    const adminPayload = req.body

    try {
        await adminAddSchema.validateAsync(adminPayload)
        next()
    } catch (error) {
        next({
                message: error.details[0].message,
                status: 400
        })
    }
}


async function UpdateAdminValidationMW(req,res,next){
        const adminPayload = req.body
    
        try {
            await adminUpdateSchema.validateAsync(adminPayload)
            next()
        } catch (error) {
            next({
                    message: error.details[0].message,
                    status: 400
            })
        }
    }
module.exports = {
        addAdminValidationMW,
        UpdateAdminValidationMW
}