import { UserRepository } from "../../../data/contracts/userRepository";
import { UserDTO } from "../../../data/dto/userDTO";
import { UserModel } from "./models/userModel";
import mongoose from "mongoose";
import { User } from "../../../domain/entities/User";

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

    async findUserById(id: number): Promise<User>{
        const user = await UserModel.findById(id)
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        }
    }

    async findAllUsers(): Promise<UserDTO[]>{
        const allUsers = await UserModel.find();
        return allUsers
    }
}
