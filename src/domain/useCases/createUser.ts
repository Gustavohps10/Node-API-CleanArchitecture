import { User } from "../entities/User";

export interface createUserUseCase {
    execute: (userData: User) => Promise<User>
}