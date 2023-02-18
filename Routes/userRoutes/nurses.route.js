const express = require('express');
const {addNurseValidationMW, UpdateNurseValidationMW} = require('../../Validators/nurses.validator');
const nurseController = require('../../Controllers/nurse.controller');

const nurseRouter = express.Router();

nurseRouter.get('/', nurseController.getAllNurses);

nurseRouter.get('/:email', nurseController.getNurseByEmail);

nurseRouter.post('/', addNurseValidationMW, nurseController.addNurse);

nurseRouter.put('/:email', UpdateNurseValidationMW, nurseController.updateNurseByEmail);

nurseRouter.delete('/:email', nurseController.deleteNurseByEmail);

module.exports = nurseRouter;