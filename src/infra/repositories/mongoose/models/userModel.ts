import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
})

export const UserModel = mongoose.model("User", UserSchema)