const express = require('express');
const {addPharmacistValidationMW, UpdatePharmacistValidationMW} = require('../../Validators/pharmacist.validator');
const pharmacistController = require('../../Controllers/pharmacist.controller');

const pharmacistRouter = express.Router();

pharmacistRouter.get('/', pharmacistController.getAllPharmacists);

pharmacistRouter.get('/:email', pharmacistController.getPharmacistByEmail);

pharmacistRouter.post('/', addPharmacistValidationMW, pharmacistController.addPharmacist);

pharmacistRouter.put('/:email', UpdatePharmacistValidationMW, pharmacistController.updatePharmacistByEmail);

pharmacistRouter.delete('/:email', pharmacistController.deletePharmacistByEmail)

module.exports = pharmacistRouter;