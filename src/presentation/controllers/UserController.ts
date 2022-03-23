import { createUserUseCase } from "../../domain/useCases/createUser";
import { Controller } from "../contracts/Controller";
import { HttpResponse, HttpRequest, serverError, ok } from "../contracts/http";

export class UserController implements Controller{
    constructor(
        private readonly createUser: createUserUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            if(!req.body.name || !req.body.email || !req.body.password){
             throw new Error("All fields must be filled")
            }

            const newUser = await this.createUser.execute({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            return ok(newUser)
        } catch (error) {
            return serverError(error)
        }
    } 
}