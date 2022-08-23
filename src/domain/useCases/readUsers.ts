import { User } from "../entities/User";

export interface readUsersUseCase {
    execute: () => Promise<User[]>
}