
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    
    type:{
        type:String,
        required:true,
    }


})

module.exports = mongoose.model.Users || mongoose.model("Industry", UserSchema);