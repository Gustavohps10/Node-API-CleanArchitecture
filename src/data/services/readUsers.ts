import { readUsersUseCase } from "../../domain/useCases/readUsers";
import {UserRepository} from "../contracts/userRepository"
import { UserDTO } from "../dto/userDTO";

export class ReadUsersService implements readUsersUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(): Promise<UserDTO[]>{
        //!Regras de negócio
        return this.userRepository.findAllUsers();
    }
}