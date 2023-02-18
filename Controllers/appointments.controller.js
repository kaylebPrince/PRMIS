function getAllAppointments(req, res){
    Appointment.find()
    .then(appointments => {
        res.send(appointments)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
  }
  
  function getApppointmentById(req,res){
    const id = req.params.id
    Appointment.findById(id)
        .then(appointment => {
            res.status(200).send(appointment)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
  }
  
  function addAppointment(req,res){
    const appointment = req.body
    appointment.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Appointment.create(appointment)
        .then(appointment => {
          res.status(201).send(appointment)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }
  const Appointment = require('../Models/appointments.model');

  function updateAppointment(req, res){
    const id = req.params.id
    const appointment = req.body
    appointment.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Appointment.findByIdAndUpdate(id, appointment, { new: true })
        .then(newUpdate => {
            res.status(200).send(newUpdate)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }
  
  function deleteAppointmentByID(req, res){
    const id = req.params.id
    Appointment.findByIdAndRemove(id)
        .then(appointment => {
            res.status(200).send(appointment)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
  }


//   Appointment Booking Segment
async function bookAppointment(req, res) {
try {
    const { patientName, doctorName, date, time } = req.body;

    // Check if the appointment already exists
    const existingAppointment = await Appointment.findOne({ doctorName, date, time });
    if (existingAppointment) {
      return res.status(400).json({ message: 'This appointment already exists' });
    }

    // Create a new appointment
    const appointment = new Appointment({ patientName, doctorName, date, time });
    await appointment.save();

    return res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

  module.exports = {
    getAllAppointments,
    addAppointment,
    getApppointmentById,
    updateAppointment,
    deleteAppointmentByID,
    bookAppointment
  }