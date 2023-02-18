const Pharmacist = require('../Models/pharmacist.model');

function getAllPharmacists(req, res){
    Pharmacist.find()
  .then(pharmacists => {
      res.send(pharmacists)
  })
  .catch(err => {
      console.log(err)
      res.send(err)
  })
}

function getPharmacistByEmail(req,res){
  const email = req.params.email
  Pharmacist.findById(email)
      .then(pharmacist => {
          res.status(200).send(pharmacist)
      }).catch(err => {
          console.log(err)
          res.status(404).send(err)
      })
}

async function addPharmacist(req,res){
  const pharmacist = req.body
  const existingPharmacist = await Pharmacist.findOne({ pharmacist });     // Check if the pharmacist exists
//   if (existingPharmacist) {
//       return res.status(400).json({ message: 'This pharmacist already exists' });
//   }
  pharmacist.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
  await Pharmacist.create(pharmacist)
      .then(pharmacist => {
          res.status(201).json({ message: 'Pharmacist created successfully', pharmacist });
      }).catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Server Error', err });
      })
}

function updatePharmacistByEmail(req, res){
  const email = req.params.id
  const pharmacist = req.body
  pharmacist.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
  Pharmacist.findByIdAndUpdate(email, pharmacist, { new: true })
      .then(newUpdate => {
          res.status(200).json({message: 'Details updated successfully', newUpdate});
      }).catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Server Error', err })
      })
}

function deletePharmacistByEmail(req, res){
  const email = req.params.id
  Pharmacist.findByIdAndRemove(email)
      .then(pharmacist => {
          res.status(200).send(pharmacist)
      }).catch(err => {
          console.log(err)
          res.status(500).send(err)
      })
}



module.exports = {
  getAllPharmacists,
  getPharmacistByEmail,
  addPharmacist,
  updatePharmacistByEmail,
  deletePharmacistByEmail
}