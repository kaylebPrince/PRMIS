const express = require('express');
const bloodDonorController = require('../../Controllers/bloodDonors.controller');

const bloodDonorRouter = express.Router();

bloodDonorRouter.get('/', bloodDonorController.getAllbloodDonors);

bloodDonorRouter.get('/:id', bloodDonorController.getBloodDonorById);

bloodDonorRouter.post('/', bloodDonorController.addDonor);

bloodDonorRouter.put('/:id', bloodDonorController.updateDonor);

bloodDonorRouter.delete('/:id', bloodDonorController.deleteDonorByID);

module.exports = bloodDonorRouter;