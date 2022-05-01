import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
   
    user_id: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
        required: true   
    },
    user_email: {
        type: String,
        required: true   
    },
    user_password: {
        type: String,
        required: true   
    }
})

var users = mongoose.model('users', userSchema);

export default users;