const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        lowercase: true,
        trim:true,
        unique: true,
        minlength:[3, 'Username must atleadt be 3 characters long']
    },
    email:{
        type: String,
        required:true,
        lowercase: true,
        trim:true,
        unique: true,
        minlength:[13, 'Email must atleadt be 13 characters long']
    },
    password:{
        type: String,
        required:true,
    
        trim:true,
       
        minlength:[8, 'Email must atleadt be 8 characters long']
    }

})

const user= mongoose.model('user', userSchema);
module.exports=user;  