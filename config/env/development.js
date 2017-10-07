module.exports = {
    mongoUri: 'mongodb://localhost/myFirstNode',
    // or use
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
              clientID: '670598748988-tipl2s7r08fu1aal9ba80f3kfkls4qkm.apps.googleusercontent.com',
              clientSecret: 'GAaADhpU3YmGj2Q0H95DSsc0',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }
}