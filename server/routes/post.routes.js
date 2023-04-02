// Aqui declararemos las rutas  y los metodos GET POS PUT ....
import { Router } from "express";
const router = Router();

router.get('/login',(req,res)=>{
    res.render('login');
});


router.get('/createUser',(req,res)=>{
    res.render('CreateUser');
});

router.get('Administrador',(req,res)=>{
    res.render('index');
})

export default router;