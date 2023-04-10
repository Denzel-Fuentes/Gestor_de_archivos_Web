
import { File } from "../models/files.js";
import { User } from "../models/user.js";
// CRUD functions para la colección "File"
import {Readable as Readable} from 'stream';
export const createFile =async function (req,res) {
  if(req.session.passport.user != undefined){
  // recibimos el objeto con los datos del archivo
    const email =req.session.passport.user.email
    const query =  await User.findOne({email:email })
    const file = req.files.file;
    console.log("-------------------------------------------")
    console.log(file)
    const newFile = new File(
      {
        filename:file.name,
        filetype:file.mimetype.split("/")[0],
        size:parseInt(file.size / 1024),
        id_user:query._id,
        data:file.data
      })
    await newFile.save();
    //console.log(newFile);
    res.sendStatus(200);
    
  }else{
    res.sendStatus(404);
  }
}

export const fileDowload = async (req,res)=>{
  const archivoId = req.params.id;
  
  try {
    const archivo = await File.findById(archivoId);
    if (!archivo) {
      return res.status(404).send('Archivo no encontrado');
    }
    const stream = new Readable();
    stream.push(archivo.data);
    stream.push(null);
    res.set('Content-Type', archivo.filetype);
    res.set('Content-Disposition', `attachment; filename=${archivo.filename}`);
    stream.pipe(res);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error interno del servidor');
  }
}
export const findFilesById =async function (id) {
  const files = await File.find({id_user:id},
                                {filename:1,date:1,size:1,filetype:1,_id:1})
  console.log(files);
  return files
}

export const updateFile=function(fileId, updatedFile) {
  return File.findByIdAndUpdate(fileId, updatedFile, { new: true }).exec();
}
export const findFileType=async(type,id)=>{
    const files = await File.find({id,type}, {filename:1,date:1,size:1,filetype:1,_id:1})
    return files;
}
export const fileDelete= async (req,res) => {
  const archivoId = req.params.id;
  try{
    await File.findByIdAndDelete(archivoId).exec()
    res.redirect('/profile');
  }catch(err){
    console.log(err)
  }
  
  
}

