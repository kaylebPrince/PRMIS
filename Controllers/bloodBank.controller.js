const BloodBank = require('../Models/bloodBank.model');

// Controller functions for blood bank
function createBloodBank(req,res){
    const bloodBank = req.body
    bloodBank.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    BloodBank.create(bloodBank)
        .then(bloodBank => {
          res.status(201).send(bloodBank)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }

function getBloodBank(req, res){
    BloodBank.find()
    .then(bloodBank => {
        res.send(bloodBank)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

function updateBloodBank(req, res){
    const id = req.params.id
    const bloodBank = req.body
    bloodBank.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    BloodBank.findByIdAndUpdate(id, bloodbank, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteBloodBank(req, res){
    const id = req.params.id
    BloodBank.findByIdAndRemove(id)
        .then(bloodbank => {
            res.status(200).send(bloodbank)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    createBloodBank,
    getBloodBank,
    updateBloodBank,
    deleteBloodBank
}