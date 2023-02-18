const Doctor = require('../Models/user.model');
const Nurse = require('../Models/nurse.model');
const Laboratorist = require('../Models/laboratorist.model');
const Patient = require('../Models/patient.model');
const Pharmacist = require('../Models/pharmacist.model');
const Admin = require('../Models/admin.model');

const users = [Doctor, Nurse, Laboratorist, Patient, Pharmacist, Admin];

for (user of users){
    function getAllUsers(req, res){
        users.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }

    function getUserById(req,res){
        const id = req.params.id
        user.findById(id)
            .then(user => {
                res.status(200).send(user)
            }).catch(err => {
                console.log(err)
                res.status(404).send(err)
            })
    }

    function addUser(req,res){
        const user = req.body
        user.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
        user.create(user)
            .then(user => {
                res.status(201).send(user)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    function updateUserDetails(req, res){
        const id = req.params.id
        const user = req.body
        user.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
        user.findByIdAndUpdate(id, user, { new: true })
            .then(newUpdate => {
                res.status(200).send(newUpdate)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    function deleteUserByID(req, res){
        const id = req.params.id
        user.findByIdAndRemove(id)
            .then(user => {
                res.status(200).send(user)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUserDetails,
  deleteUserByID,
}