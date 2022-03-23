import { UserRepository } from "../../../data/contracts/createUserRepository";
import { UserDTO } from "../../../data/dto/userDTO";
import { UserModel } from "./models/userModel";
import mongoose from "mongoose";

export class MongoRepository implements UserRepository{
    constructor(){
        mongoose.connect("mongodb://localhost:27017/rest-api")
    }

    async createUser(userData: UserDTO): Promise<UserDTO>{
        const newUser = await UserModel.create(userData)
        return {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        }
    }
}
