const mongoose = require('mongoose');

const messageTemplate = new mongoose.Schema({
    sender:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('mytable', messageTemplate)