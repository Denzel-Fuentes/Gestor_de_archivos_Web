// Aqui declararemos las rutas  y los metodos GET POS PUT ....
import { Router } from "express";
import { createFile,fileDowload,fileDelete } from "../database/controllers/files.controllers.js";

const router = Router();

router.get('/login:type',(req,res)=>{
    const {type} = req.params;
    console.log(type)
    if (type === ":createUser") {
        res.render('login',{login:'register',register:'login'});
    }else{res.render('login',{login:'login',register:'register'});}
    
});

router.post('/Archivo',createFile);
router.get('/descargar/:id', fileDowload);
router.get('/deleteFile/:id',fileDelete);

export default router;