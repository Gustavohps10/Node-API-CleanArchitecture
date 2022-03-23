import { createUserUseCase } from "../../domain/useCases/createUser";
import {UserRepository} from "../contracts/createUserRepository"
import { UserDTO } from "../dto/userDTO";

export class CreateUserService implements createUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(userData: UserDTO): Promise<UserDTO>{
        //!Regras de negócio
        
        return this.userRepository.createUser(userData)
    }
}