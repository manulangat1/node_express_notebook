const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,"Please add some text"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Notes',NotesSchema)