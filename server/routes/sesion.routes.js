import passport from "passport";
import { Router } from "express";
const router = Router();

router.get('/success',(req,res)=>{
        console.log(req.session.passport.user.picture)
        const email = req.session.passport.user.email
        const name = req.session.passport.user.displayName
        const pic = req.session.passport.user.picture
        res.render('index',
        {name:name,
        email:email,   
        pic:pic});
   
   
})
router.get('/google', passport.authenticate('google', { scope:[ 'profile','email']}));

router.get('/google/callback',passport.authenticate
('google',{failureRedirect:'/failed'}),function(req,res){
      res.redirect('/success')
    //Successful authentication , redirect home
})

export default router;