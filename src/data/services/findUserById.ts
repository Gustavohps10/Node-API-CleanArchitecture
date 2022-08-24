import { findUserByIdUseCase } from "../../domain/useCases/findUserById";
import { UserDTO } from "../dto/userDTO";
import { UserRepository } from "../contracts/userRepository";

export class FindUserByIdService implements findUserByIdUseCase{

    constructor(private readonly userRepository: UserRepository){}

    async execute(id: string): Promise<UserDTO>{
        //!Regras de negócio
        return this.userRepository.findUserById(id)
    }
}