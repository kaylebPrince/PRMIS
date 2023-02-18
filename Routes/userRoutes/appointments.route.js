const express = require('express');
const appointmentController = require('../../Controllers/appointments.controller');

const appointmentRouter = express.Router();

appointmentRouter.get('/', appointmentController.getAllAppointments);

appointmentRouter.get('/:id', appointmentController.getApppointmentById);

appointmentRouter.get('/', appointmentController.addAppointment);

appointmentRouter.get('/:id', appointmentController.updateAppointment);

appointmentRouter.get('/:id', appointmentController.deleteAppointmentByID);

appointmentRouter.post('/', appointmentController.bookAppointment);

module.exports = appointmentRouter;