//Aqui pondremos el Crud para controlar los files
import mongoose from 'mongoose';

// Definir el schema para la colección "File"
const fileSchema = new mongoose.Schema({
/*   filename: { type: String, required: true },
  filetype: { type: String, required: true },
  date: { type: Date, default: Date.now },
  size: { type: Number, required: true },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, */
  data:Buffer,
});

// Definir el modelo para la colección "File"
export const File = mongoose.model('File', fileSchema);