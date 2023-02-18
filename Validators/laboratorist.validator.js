const Joi = require("joi");

const laboratoristAddSchema = Joi.object({
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

const laboratoristUpdateSchema = Joi.object({
        firstName: Joi.string()
                .max(255),
        lastName: Joi.string()
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
                .less('12-31-2022'),
        state: Joi.string()
                .required(),
        country: Joi.string(),
        phone_number: Joi.string()
                .min(11).required(),
        password: Joi.string()
                .max(16).min(7).required()
})



async function addLaboratoristValidationMW(req,res,next){
    const laboratoristPayload = req.body

    try {
        await laboratoristAddSchema.validateAsync(laboratoristPayload)
        next()
    } catch (error) {
        next({
                message: error.details[0].message,
                status: 400
        })
    }
}


async function UpdateLaboratoristValidationMW(req,res,next){
        const laboratoristPayload = req.body
    
        try {
            await laboratoristUpdateSchema.validateAsync(laboratoristPayload)
            next()
        } catch (error) {
            next({
                    message: error.details[0].message,
                    status: 400
            })
        }
    }
module.exports = {
        addLaboratoristValidationMW,
        UpdateLaboratoristValidationMW
}