const express = require('express');
const bodyParser = require('body-parser');
const config = require("./Config/config");
const passport = require('passport');
const connectToDB = require("./Database/index");
const logger = require("./logging/logger");
const helmet = require('helmet');
const rateLimiter = require('express-rate-limit');
const cors = require('cors');


// Import authentication middleware
require('./authMiddleware/doctor.middleware');
require('./authMiddleware/laboratorist.middleware');
require('./authMiddleware/nurse.middleware');
require('./authMiddleware/patient.middleware');
require('./authMiddleware/pharmacist.middleware');
// require('./authMiddleware/admin.middleware');


// routers
const doctorRouter = require('./Routes/userRoutes/doctors.route'); // 1
const laboratoristRouter = require('./Routes/userRoutes/laboratorists.route'); // 2
const pharmacistRouter = require('./Routes/userRoutes/pharmacists.route'); // 3
const nurseRouter = require('./Routes/userRoutes/nurses.route'); // 4
const patientRouter = require('./Routes/userRoutes/patients.route'); // 5
const appointmentRouter = require('./Routes/userRoutes/appointments.route'); // 6
const medicalReportRouter = require('./Routes/userRoutes/medicalReports.route'); // 7
const prescriptionRouter = require('./Routes/userRoutes/prescriptions.route'); // 8
const bloodDonorRouter = require('./Routes/userRoutes/bloodDonors.route'); // 9
const bloodBankRouter = require('./Routes/userRoutes/bloodBank.route'); // 10
// const adminRouter = require('./Routes/userRoutes/admin.route'); // 11

const secureRoute = require('./Routes/authRoutes/auth.route');

const app = express();

connectToDB();

//  Add middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

const limiter = rateLimiter({
	windowMs: 15 * 60 * 1000,                       // 15 minutes
	max: 100,                                       // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true,                          // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false,                           // Disable the `X-RateLimit-*` headers
})

// Security Middleware
app.use(helmet());

// Protected routes
app.use("/api/doctors",  doctorRouter);
app.use("/api/laboratorists", laboratoristRouter);
app.use("/api/nurses", nurseRouter);
app.use("/api/patient", patientRouter);
app.use("/api/pharmacists", pharmacistRouter)
app.use("/api/appointments", appointmentRouter);
app.use("/api/patient/medical-reports", medicalReportRouter);
app.use("/api/patient/prescriptions", prescriptionRouter);
app.use("/api/blood-donors", bloodDonorRouter);
app.use("/api/blood-bank", bloodBankRouter);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Home route
app.get('/home', (req, res) => {
    console.log(res);
    res.status(200).json({ message: 'Welcome to the Patient Record Management System' });
});

// Handle errors.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });  

app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});