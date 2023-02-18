const Nurse = require('../Models/nurse.model');

function getAllNurses(req, res){
    Nurse.find()
  .then(nurses => {
      res.send(nurses)
  })
  .catch(err => {
      console.log(err)
      res.send(err)
  })
}

function addNurse(req,res){
    const nurse = req.body
    nurse.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Nurse.create(nurse)
        .then(nurse => {
            res.status(201).send(nurse)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function getNurseByEmail(req,res){
  const email = req.params.email
  Nurse.findById(email)
      .then(nurse => {
          res.status(200).send(nurse)
      }).catch(err => {
          console.log(err)
          res.status(404).send(err)
      })
}

function updateNurseByEmail(req, res){
    const email = req.params.email
    const nurse = req.body
    nurse.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Nurse.findByIdAndUpdate(email, nurse, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteNurseByEmail(req, res){
    const email = req.params.email
    Nurse.findByIdAndRemove(email)
        .then(nurse => {
            res.status(200).send(nurse)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllNurses,
    getNurseByEmail,
    addNurse,
    updateNurseByEmail,
    deleteNurseByEmail,
}