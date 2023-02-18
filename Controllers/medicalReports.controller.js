const Report = require('../Models/medicalReport.model');

function getAllReports(req, res){
    Report.find()
    .then(reports => {
        res.send(reports)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

function getReportById(req,res){
    const id = req.params.id
    Report.findById(id)
        .then(report => {
            res.status(200).send(report)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function addReport(req,res){
    const report = req.body
    report.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Report.create(report)
        .then(report => {
            res.status(201).send(preportatient)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updateReport(req, res){
    const id = req.params.id
    const report = req.body
    report.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Report.findByIdAndUpdate(id, report, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteReportByID(req, res){
    const id = req.params.id
    Report.findByIdAndRemove(id)
        .then(report => {
            res.status(200).send(report)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllReports,
    getReportById,
    addReport,
    updateReport,
    deleteReportByID
}