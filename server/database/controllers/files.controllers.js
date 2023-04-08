
import { File } from "../models/files.js";
// CRUD functions para la colección "File"

export const createFile =async function (req,res) {
  // recibimos el objeto con los datos del archivo
  let file = req.files.file;
  let data = file.data;
  console.log(file)
  const newFile = new File({data})
  await newFile.save();
  //console.log(newFile);
  res.sendStatus(200);
}

export const findFileById =function (fileId) {
  return File.findById(fileId).exec();
}

export const updateFile=function(fileId, updatedFile) {
  return File.findByIdAndUpdate(fileId, updatedFile, { new: true }).exec();
}

export const deleteFile=function (fileId) {
  return File.findByIdAndDelete(fileId).exec();
}

