const Prescription = require('../Models/prescription.model');

function getAllPrescriptions(req, res){
    Prescription.find()
    .then(prescriptions => {
        res.send(prescriptions)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
  }
  
  function getPrescriptionById(req,res){
    const id = req.params.id
    Prescription.findById(id)
        .then(prescription => {
            res.status(200).send(prescription)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
  }
  
  function addPrescription(req,res){
    const prescription = req.body
    prescription.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Prescription.create(prescription)
        .then(prescription => {
          res.status(201).send(prescription)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }
  
  function updatePrescription(req, res){
    const id = req.params.id
    const prescription = req.body
    prescription.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Prescription.findByIdAndUpdate(id, prescription, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }
  
  function deletePrescriptionByID(req, res){
    const id = req.params.id
    Prescription.findByIdAndRemove(id)
        .then(prescription => {
            res.status(200).send(prescription)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }

  module.exports = {
    getAllPrescriptions,
    getPrescriptionById,
    addPrescription,
    updatePrescription,
    deletePrescriptionByID,
  }