import { createUserUseCase } from "../../domain/useCases/createUser";
import { Controller } from "../contracts/Controller";
import { HttpResponse, HttpRequest, serverError, ok } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class CreateUserController implements Controller{
    constructor(
        private readonly createUser: createUserUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse<UserViewModel>>{
        try {
            if(!req.body.name || !req.body.email || !req.body.password){
                throw new Error("All fields must be filled")
            }

            const newUser = await this.createUser.execute({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            const viewModel = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }

            return ok(viewModel)
        } catch (error) {
            return serverError(error)
        }
    } 
}