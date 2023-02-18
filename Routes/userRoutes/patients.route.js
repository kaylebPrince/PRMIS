const express = require('express');
const {addPatientValidationMW, UpdatePatientValidationMW} = require('../../Validators/patients.validator');
const patientController = require('../../Controllers/patient.controller');

const patientRouter = express.Router();

patientRouter.get('/', patientController.getAllPatients);

patientRouter.get('/:id', patientController.getPatientByEmail);

patientRouter.post('/', addPatientValidationMW, patientController.addPatient);

patientRouter.put('/:id', UpdatePatientValidationMW, patientController.updatePatientByEmail);

patientRouter.delete('/:id', patientController.deletePatientByEmail)

module.exports = patientRouter;