import { GOOGLE_CLIENT_ID , GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_SECRET } from '../config.js';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2'
GoogleStrategy.Strategy;

passport.serializeUser(function(user,done) {
    done(null,user);
    /* from user take the just the id (to minimaze the content to the done callbacks)
    PS:you dont have to do it like this its just user
    */
    
})
passport.deserializeUser(function(user,done){
    done(null,user);
    /* instead of user this function usually recivbes the id then you use the id to select the user fro the db and pass the user
    PS: you can later acces this data in nay routes in :req.user */
})

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:GOOGLE_CALLBACK_URL,
    passReqToCallback:true

},function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}))

