const Patient = require('../Models/patient.model');

function getAllPatients(req, res){
    Patient.find()
    .then(patients => {
        res.send(patients)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

function getPatientByEmail(req,res){
    const email = req.params.email
    Patient.findById(email)
        .then(patient => {
            res.status(200).send(patient)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

function addPatient(req,res){
    const patient = req.body
    patient.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Patient.create(patient)
        .then(patient => {
            res.status(201).send(patient)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function updatePatientByEmail(req, res){
    const email = req.params.email
    const patient = req.body
    patient.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Patient.findByIdAndUpdate(email, patient, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deletePatientByEmail(req, res){
    const email = req.params.email
    Patient.findByIdAndRemove(email)
        .then(patient => {
            res.status(200).send(patient)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllPatients,
    getPatientByEmail,
    addPatient,
    updatePatientByEmail,
    deletePatientByEmail,
}





















// exports.findAll = function(req, res) {
//     Patient.findAll(function(err, patient) {
//     console.log('controller')
//     if (err)
//     res.send(err);
//     console.log('res', patient);
//     res.send(patient);
//     });
// };

// exports.create = function(req, res) {
// const new_patient = new Patient(req.body);
// //handles null error
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         Patient.create(new_patient, function(err, patient) {
//         if (err)
//         res.send(err);
//         res.json({error:false,message:"Patient added successfully!",data:patient});
//         });
//     }
// };

// exports.findById = function(req, res) {
// Patient.findById(req.params.id, function(err, patient) {
//   if (err)
//   res.send(err);
//   res.json(patient);
// });
// };

// exports.update = function(req, res) {
//   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//     res.status(400).send({ error:true, message: 'Please provide all required field' });
//   }else{
//     Patient.update(req.params.id, new Patient(req.body), function(err, patient) {
//    if (err)
//    res.send(err);
//    res.json({ error:false, message: 'patient successfully updated' });
// });
// }
// };

// exports.delete = function(req, res) {
// Patient.delete( req.params.id, function(err, patient) {
//   if (err)
//   res.send(err);
//   res.json({ error:false, message: 'patient successfully deleted' });
// });
// };