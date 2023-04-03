import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim : true
    }, 
    lastname: {
        type:String,
        required: true,
        trim: true,
    },
    image: {
        url: String,
    },
    email:{
        type:String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})
export default mongoose.model('usermodel',postSchema);