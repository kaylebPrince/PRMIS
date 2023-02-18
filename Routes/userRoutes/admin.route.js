const express = require('express');
const {addAdminValidationMW, UpdateAdminValidationMW}= require('../../Validators/admin.validator');
const adminController = require('../../Controllers/admin.controller');

const adminRouter = express.Router();

adminRouter.get('/', adminController.getAllUsers);

adminRouter.get('/:id', adminController.getUserById);

adminRouter.post('/', addAdminValidationMW, adminController.addUser);

adminRouter.put('/:id', UpdateAdminValidationMW, adminController.updateUserDetails);

adminRouter.delete('/:id', adminController.deleteUserByID)

module.exports = adminRouter;