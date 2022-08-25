import { UserDTO } from "../dto/userDTO";

export interface UserRepository{
    createUser: (userData: UserDTO) => Promise<UserDTO>
    findUserById: (id: string) => Promise<UserDTO>
    findUserByEmail: (email: string) => Promise<UserDTO>
    findAllUsers: () => Promise<UserDTO[]>
}