const express = require('express');
const medicalReportController = require('../../Controllers/medicalReports.controller');

const medicalReportRouter = express.Router();
medicalReportRouter.get('/', medicalReportController.getAllReports);

medicalReportRouter.get('/:id', medicalReportController.getReportById);

medicalReportRouter.post('/', medicalReportController.addReport);

medicalReportRouter.put('/:id', medicalReportController.updateReport);

medicalReportRouter.delete('/:id', medicalReportController.deleteReportByID);

module.exports = medicalReportRouter;