import express from "express";
import postRoutes from './routes/post.routes.js'
import sesionRoutes from './routes/sesion.routes.js'
import { GOOGLE_CLIENT_SECRET } from "./config.js";
import cookieSession  from 'cookie-session';
import passport from "passport";
import  session from 'express-session' ;
import fileUpload from "express-fileupload";
import engine from 'ejs-mate';
import flash from 'connect-flash';
import morgan from 'morgan'
import path, { dirname } from "path";

const app = express()
//configuracion de ejs
//console.log(path.join(new URL(import.meta.url).pathname.replace(/^\/+/g, ''), '../views'))
app.set('views', path.join(new URL(import.meta.url).pathname.replace(/^\/+/g, ''), '../views'))
app.set("view engine","ejs")
app.engine('ejs',engine);
//middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(fileUpload());
//convierte la informacion recibida en un objeto
app.use(express.urlencoded({extended: true}));

import  './passport-setup.js';
import './controllers/local-auth.js'
//Configuracion para  el inicio de sesion

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
    }));

app.use(session({
    secret:'mysecreto',
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
  });




//Servir el archivo principal
app.use('/',express.static('./public'))

//usar las rutas que importamos
app.use(postRoutes);
app.use(sesionRoutes)


export default app;