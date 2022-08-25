import { UserDTO } from "../../data/dto/userDTO"

export interface userAuthenticationUseCase {
    execute(loginData: loginDataType): Promise<UserDTO>
}

export type loginDataType = {
    email: string
    password: string
}