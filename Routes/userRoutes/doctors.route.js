const express = require('express');
const {addDoctorValidationMW, UpdateDoctorValidationMW}= require('../../Validators/doctors.validator');
const doctorController = require('../../Controllers/doctor.controller');

const doctorRouter = express.Router();

doctorRouter.get('/', doctorController.getAllDoctors);

doctorRouter.get('/:email', doctorController.getDoctorByEmail);

doctorRouter.post('/', addDoctorValidationMW, doctorController.addDoctor);

doctorRouter.put('/:email', UpdateDoctorValidationMW, doctorController.updateDoctorByEmail);

doctorRouter.delete('/:email', doctorController.deleteDoctorByEmail)

module.exports = doctorRouter;