const express = require('express');
const {addLaboratoristValidationMW, UpdateLaboratoristValidationMW} = require('../../Validators/laboratorist.validator');
const laboratoristController = require('../../Controllers/laboratorist.controller');

const laboratoristRouter = express.Router();

laboratoristRouter.get('/', laboratoristController.getAllLaboratorists);

laboratoristRouter.get('/:id', laboratoristController.getLaboratoristById);

laboratoristRouter.post('/', addLaboratoristValidationMW, laboratoristController.addLaboratorist);

laboratoristRouter.put('/:id', UpdateLaboratoristValidationMW, laboratoristController.updateLaboratorist);

laboratoristRouter.delete('/:id', laboratoristController.deleteLaboratoristByID);

laboratoristRouter.delete('/:id', laboratoristController.updateLaboratorist);

module.exports = laboratoristRouter;