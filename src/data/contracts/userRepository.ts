import { UserDTO } from "../dto/userDTO";

export interface UserRepository{
    createUser: (userData: UserDTO) => Promise<UserDTO>
    findUserById: (id: number) => Promise<UserDTO>
    findAllUsers: () => Promise<UserDTO[]>
}