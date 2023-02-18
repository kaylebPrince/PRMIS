const express = require('express');
const prescriptionsController = require('../../Controllers/prescriptions.controller');
const prescriptionRouter = express.Router();

prescriptionRouter.get('/', prescriptionsController.getAllPrescriptions);

prescriptionRouter.get('/:id', prescriptionsController.getPrescriptionById);

prescriptionRouter.post('/', prescriptionsController.addPrescription);

prescriptionRouter.put('/:id', prescriptionsController.updatePrescription);

prescriptionRouter.delete('/:id', prescriptionsController.deletePrescriptionByID);

module.exports = prescriptionRouter;