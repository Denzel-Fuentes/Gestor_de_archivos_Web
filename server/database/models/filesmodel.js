import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    filename:{
        type:String,
        required: true,
        trim : true
    }, 
    filetype: {
        type:String,
        required: true,
        trim: true,
    },
    date: {
        type:date,
        required: true,
        trim: true
    },
    size: {
        type:float,
        required: true,
        trim: true
    },
    id_user: {
        type: String,
        required: true,
        trim: true
    }
})
export default mongoose.model('filesmodel',postSchema);