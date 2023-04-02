// Aqui declararemos las rutas  y los metodos GET POS PUT ....
import { Router } from "express";
const router = Router();

router.get('/login:type',(req,res)=>{
    const {type} = req.params;
    console.log(type)
    if (type === ":createUser") {
        res.render('login',{login:'register',register:'login'});
    }else{res.render('login',{login:'login',register:'register'});}
    
});
router.get('Administrador',(req,res)=>{
    res.render('index');
})

export default router;