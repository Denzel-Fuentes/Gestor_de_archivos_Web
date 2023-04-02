import mongoose from 'mongoose';
import { MONGODB } from '../config.js';
const mongoDB = MONGODB;

mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', function() {
  console.log('Conectado a la base de datos de MongoDB');
});