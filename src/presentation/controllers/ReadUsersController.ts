import { readUsersUseCase } from "../../domain/useCases/readUsers";
import { Controller } from "../contracts/Controller";
import { HttpResponse, serverError, ok } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class ReadUsersController implements Controller{
    constructor(
        private readonly readUsers: readUsersUseCase
    ){}

    async handle(): Promise<HttpResponse<UserViewModel[]>>{
        try {
            const allUsers = await this.readUsers.execute()
            const viewModels = allUsers.map(user =>{
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            })
            return ok(viewModels)
        } catch (error) {
            return serverError(error)
        }
    } 
}