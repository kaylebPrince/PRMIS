const Donor = require('../Models/bloodDonors.model');

function getAllbloodDonors(req, res){
    Donor.find()
    .then(donors => {
        res.send(donors)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

function getBloodDonorById(req,res){
    const id = req.params.id
    Donor.findById(id)
        .then(donor => {
            res.status(200).send(donor)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function addDonor(req,res){
    const donor = req.body
    report.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Donor.create(donor)
        .then(donor => {
            res.status(201).send(donor)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updateDonor(req, res){
    const id = req.params.id
    const donor = req.body
    report.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Donor.findByIdAndUpdate(id, donor, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteDonorByID(req, res){
    const id = req.params.id
    Donor.findByIdAndRemove(id)
        .then(donor => {
            res.status(200).send(donor)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllbloodDonors,
    getBloodDonorById,
    addDonor,
    updateDonor,
    deleteDonorByID,
}