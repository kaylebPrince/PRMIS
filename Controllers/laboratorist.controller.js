const Laboratorist = require('../Models/laboratorist.model');

// Controller functions for Laboratorists
function getAllLaboratorists(req, res){
    Laboratorist.find()
  .then(laboratorists => {
      res.send(laboratorists)
  })
  .catch(err => {
      console.log(err)
      res.send(err)
  })
}

function getLaboratoristById(req,res){
  const id = req.params.id
  Laboratorist.findById(id)
      .then(laboratorist => {
          res.status(200).send(laboratorist)
      }).catch(err => {
          console.log(err)
          res.status(404).send(err)
      })
}

function addLaboratorist(req,res){
    const laboratorist = req.body
    laboratorist.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Laboratorist.create(laboratorist)
        .then(laboratorist => {
            res.status(201).send(laboratorist)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updateLaboratorist(req, res){
    const id = req.params.id
    const laboratorist = req.body
    laboratorist.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Laboratorist.findByIdAndUpdate(id, laboratorist, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deleteLaboratoristByID(req, res){
    const id = req.params.id
    Laboratorist.findByIdAndRemove(id)
        .then(laboratorist => {
            res.status(200).send(laboratorist)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


module.exports = {
    getAllLaboratorists,
    getLaboratoristById,
    addLaboratorist,
    updateLaboratorist,
    deleteLaboratoristByID
}