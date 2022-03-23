import { UserDTO } from "../dto/userDTO";

export interface UserRepository{
    createUser: (userData: UserDTO) => Promise<UserDTO>
}