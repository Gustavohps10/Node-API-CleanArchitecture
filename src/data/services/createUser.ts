import { createUserUseCase } from "../../domain/useCases/createUser";
import {UserRepository} from "../contracts/userRepository"
import { UserDTO } from "../dto/userDTO";
import * as EmailValidator from 'email-validator';

export class CreateUserService implements createUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(userData: UserDTO): Promise<UserDTO>{
        if(!EmailValidator.validate(userData.email)){
            throw new Error("Invalid email")
        }
        return this.userRepository.createUser(userData)
    }
}