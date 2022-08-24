import { UserDTO } from "../dto/userDTO";

export interface UserRepository{
    createUser: (userData: UserDTO) => Promise<UserDTO>
    findUserById: (id: string) => Promise<UserDTO>
    findAllUsers: () => Promise<UserDTO[]>
}