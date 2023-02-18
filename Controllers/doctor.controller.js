const Doctor = require('../Models/doctor.model');

// Controller functions for Doctors
function getAllDoctors(req, res){
    Doctor.find()
    .then(doctors => {
        res.send(doctors)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
  }
  
function getDoctorByEmail(req,res){
    Doctor.findOne({ email: req.params.email })
        .then(doctor => {
            if (!doctor) {
                res.status(404).json({ message: 'Doctor not found' });
            }
            return res.status(200).json(doctor);
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
};

    // const id = req.params.id
    // Doctor.findById(id)
    //     .then(doctor => {
    //         res.status(200).send(doctor)
    //     }).catch(err => {
    //         console.log(err)
    //         res.status(404).send(err)
    //     })

  
async function addDoctor(req,res){
    const doctor = req.body
    const existingDoctor = await Doctor.findOne({ doctor });     // Check if the doctor exists
    // if (existingDoctor) {
    //     return res.status(400).json({ message: 'This doctor already exists' });
    // }
    doctor.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    await Doctor.create(doctor)
        .then(doctor => {
            res.status(201).json({ message: 'Doctor created successfully', doctor });
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Server Error', err });
        })
}

function updateDoctorByEmail(req, res){
    const email = req.params.email
    const doctor = req.body
    doctor.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Doctor.findByIdAndUpdate(email, doctor, { new: true })
        .then(newUpdate => {
            res.status(200).json({message: 'Details updated successfully', newUpdate});
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Server Error', err })
        })
}

function deleteDoctorByEmail(req, res){
    const email = req.params.email
    Doctor.findByIdAndRemove(email)
        .then(doctor => {
            res.status(200).send(doctor)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}



module.exports = {
    getAllDoctors,
    getDoctorByEmail,
    addDoctor,
    updateDoctorByEmail,
    deleteDoctorByEmail,
}