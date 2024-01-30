const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
    },
    cart:[
        {
            type:Schema.Types.ObjectId,
            ref:'Cart'
        }
    ]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);