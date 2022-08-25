import { UserRepository } from "../../../data/contracts/userRepository";
import { UserDTO } from "../../../data/dto/userDTO";
import { UserModel } from "./models/userModel";
import mongoose from "mongoose";
import { User } from "../../../domain/entities/User";

export class MongoRepository implements UserRepository{
    constructor(){
        (async function(){
            await mongoose.connect("mongodb://localhost:27017/rest-api")
        })()
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

    async findUserById(id: string): Promise<UserDTO>{
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Invalid Id")
        } 
        
        const user = await UserModel.findById(id)

        if(!user){
            throw new Error("User not found")
        }
        
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        }

        
    }

    async findUserByEmail(email: string): Promise<UserDTO> {
        const user = await UserModel.findOne({"email": email})
        return user
    }

    async findAllUsers(): Promise<UserDTO[]>{
        const allUsers = await UserModel.find();
        return allUsers
    }
}
