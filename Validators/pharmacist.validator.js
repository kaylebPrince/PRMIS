const Joi = require("joi");

const pharmacistAddSchema = Joi.object({
        role: Joi.string()
                .required(),
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
        email: Joi.string()
                .required(),
        address: Joi.string()
                .required(),
        DOB: Joi.date()
                .greater('1-1-1900')
                .less('12-31-2022')
                .required(),
        state: Joi.string()
                .required(),
        country: Joi.string()
                .optional(),
        gender: Joi.string()
                .required(),
        phone_number: Joi.string()
                .min(11).required(),
        password: Joi.string()
                .max(16).min(7).required(),
        createAt: Joi.date()
                .default(Date.now),
        updateAt: Joi.date()
                .default(Date.now)
})

const pharmacistUpdateSchema = Joi.object({
    role: Joi.string()
                .required(),
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
        email: Joi.string()
                .required(),
        address: Joi.string()
                .required(),
        DOB: Joi.date()
                .greater('1-1-1900')
                .less('12-31-2022')
                .required(),
        state: Joi.string()
                .required(),
        country: Joi.string()
                .optional(),
        gender: Joi.string()
                .required(),
        phone_number: Joi.string()
                .min(11).required(),
        password: Joi.string()
                .max(16).min(7).required(),
        createAt: Joi.date()
                .default(Date.now),
        updateAt: Joi.date()
                .default(Date.now)
})



async function addPharmacistValidationMW(req,res,next){
    const pharmacistPayload = req.body

    try {
        await pharmacistAddSchema.validateAsync(pharmacistPayload)
        next()
    } catch (error) {
        next({
                message: error.details[0].message,
                status: 400
        })
    }
}


async function UpdatePharmacistValidationMW(req,res,next){
        const pharmacistPayload = req.body
    
        try {
            await pharmacistUpdateSchema.validateAsync(pharmacistPayload)
            next()
        } catch (error) {
            next({
                    message: error.details[0].message,
                    status: 400
            })
        }
    }
module.exports = {
        addPharmacistValidationMW,
        UpdatePharmacistValidationMW
}