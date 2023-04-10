import app from './app.js'
import { connectDB } from './database/conectiondb.js'

connectDB();

app.listen(3000)
console.log('La app esta corriendo en el puerto',3000)