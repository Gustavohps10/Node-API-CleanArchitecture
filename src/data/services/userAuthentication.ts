import { loginDataType, userAuthenticationUseCase } from "../../domain/useCases/userAuthentication";
import { UserRepository } from "../contracts/userRepository";
import { UserDTO } from "../dto/userDTO";
import bcrypt from "bcrypt"

export class UserAuthenticationService implements userAuthenticationUseCase{
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(loginData: loginDataType): Promise<UserDTO> { 
        const user = await this.userRepository.findUserByEmail(loginData.email)

        if(!user){
            throw new Error("Incorrect password or email")
        }

        const passwordMatch = await bcrypt.compare(loginData.password, user.password)

        if(!passwordMatch){
            throw new Error("Incorrect password or email")
        }
        //check if user is authentic

        return user
    }
}