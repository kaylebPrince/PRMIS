# PRMIS

## Introduction

PRMIS is an application that helps healthcare institutions effectively and efficiently organize and computerize patient medical data. We will be using mongoose and express.js

in this application, our users are: patients, and health_providers( health_personnel and health_institution)

health_personnel include - nurses, doctors, labtechnicians, pharmacists 

health_institutions include - diagnostic_centers, pharmacy_stores, hospitals, home_care

## As we proceed with the applicatiion, here are tasks we have to accomplish
 
### Create server and connect to database ( create DOTenv file for storage of sensitive content)

### Authentication for patient

 * model for signup of patients plus user input validation
 (fields should include:title;  full_name; gender; date_of_birth; age; signup_date; address; state; country; email; password) 
 * patient signup route plus contoller
 * patient login route plus controller
 
### AUTHENTICATION FOR HEALTH PERSONNEL

#### PHYSICIANS

  * model for signup of physician (title; Full_name ; gender; date_of_birth; years_of_experience; specialty; bio ; signup_date; address; state; country; email; 
  password)
  * signup physician controller and route
  physician, after the login details have been authenticated, will be finally authorised to login as health_provider
  * signin physician controller and route
 
 #### NURSES

  * model for signup of nurses (title; Full_name ; gender; date_of_birth; years_of_experience; specialty; bio ; signup_date; address; state; country; email; 
  password)
  * signup nurse controller and route
  physician, after the login details have been authenticated, will be finally authorised to login as health_provider
  * signin nurse controller and route