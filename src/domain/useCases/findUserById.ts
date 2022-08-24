import { User } from "../entities/User";

export interface findUserByIdUseCase{
    execute: (id: string) => Promise<User>
}