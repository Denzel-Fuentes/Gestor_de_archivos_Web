//Aqui pondremos el Crud para controlar los files
import mongoose from 'mongoose';
const url = 'mongodb://localhost/NodeFilesGestorDeArchivos';

// Definir el schema para la colección "File"
const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filetype: { type: String, required: true },
  date: { type: Date, default: Date.now },
  size: { type: Number, required: true },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Definir el modelo para la colección "File"
const File = mongoose.model('File', fileSchema);

// CRUD functions para la colección "File"
function createFile(file) {
  const newFile = new File(file);
  return newFile.save();
}

function findFileById(fileId) {
  return File.findById(fileId).exec();
}

function updateFile(fileId, updatedFile) {
  return File.findByIdAndUpdate(fileId, updatedFile, { new: true }).exec();
}

function deleteFile(fileId) {
  return File.findByIdAndDelete(fileId).exec();
}

module.exports = {
  createFile,
  findFileById,
  updateFile,
  deleteFile
};
