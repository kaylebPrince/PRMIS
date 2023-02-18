const express = require('express');
const bloodBankController = require('../../Controllers/bloodBank.controller');
const bloodBankRouter = express.Router();

bloodBankRouter.post('/', bloodBankController.createBloodBank);

bloodBankRouter.get('/:id', bloodBankController.getBloodBank);

bloodBankRouter.put('/:id', bloodBankController.updateBloodBank);

bloodBankRouter.delete('/:id', bloodBankController.deleteBloodBank);

module.exports = bloodBankRouter;