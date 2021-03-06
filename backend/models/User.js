const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    created_at:{
        type:Date,
        default:Date.now,
    },
},{strict:false});

module.exports = User = mongoose.model('user',UserSchema);