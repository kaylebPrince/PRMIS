const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const doctorModel = require('../Models/doctor.model');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


// Passport middleware to handle user registration
passport.use(
    'signup',
    new localStrategy(
      {
        username: 'username',
        role: 'role',
        email: 'email',
        password: 'password'
      },
      async (username, role, email, password, done) => {
        try {
          if (role == 'doctor'){
            const user = await doctorModel.create({username, email, password });
          }
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );


  // Passport middleware to handle user login

passport.use(
  'login',
  new localStrategy(
    {
      username: 'username',
      password: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await doctorModel.findOne({ username });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

/*
    This code uses passport-jwt to extract the JWT from the query parameter. 
    It then verifies that this token has been signed with the secret or key set during logging in (TOP_SECRET).
    If the token is valid, the user details are passed to the next middleware.
*/
passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);