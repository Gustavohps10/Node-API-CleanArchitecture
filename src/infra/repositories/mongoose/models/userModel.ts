import mongoose, {Schema} from "mongoose";
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: 'Two users cannot share the same email ({VALUE})'
    },
    password: String
})

UserSchema.plugin(beautifyUnique)

UserSchema.post('save', function(error: any, doc: any, next:any) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('User already exists'));
    } else {
        next();
    }
});

export const UserModel = mongoose.model("User", UserSchema)