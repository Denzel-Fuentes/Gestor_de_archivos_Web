// Aqui declararemos las rutas  y los metodos GET POS PUT ....
import { Router } from "express";
import { createFile } from "../database/controllers/files.controllers.js";
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

router.get('/Archivo');
router.post('/Archivo',createFile);
router.get('/book/:id');

export default router;