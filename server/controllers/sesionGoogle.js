import passport from "passport";

export const Google = passport.authenticate('google', { scope:[ 'profile','email']})

export const GoogleAu =passport.authenticate('google',{failureRedirect:'/login'})

export const RespuestaGoogle =async(req,res)=>{
    res.redirect('/success')
  //Successful authentication , redirect home
}