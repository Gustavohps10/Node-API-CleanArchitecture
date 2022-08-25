import { userAuthenticationUseCase } from "../../domain/useCases/userAuthentication";
import { Controller } from "../contracts/Controller";
import { HttpRequest, HttpResponse, serverError, ok } from "../contracts/http";
import { UserViewModel } from "../view-models/user";
import {sign} from "jsonwebtoken"

type AuthenticationResponse = {
    token: string
    user: UserViewModel
}

export class UserAuthenticationController implements Controller{
    constructor(
        private readonly userAuthentication: userAuthenticationUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse<AuthenticationResponse>>{
        try{
            const {email, password} = req.body
            
            if(!email){
                throw new Error("Email is empty")
            }

            if(!password){
                throw new Error("Password is empty")
            }
            
            const user = await this.userAuthentication.execute({
                email: email,
                password: password
            });

            const token = sign({}, "395ad606-2bbc-4e77-86b4-1a31e91ab5b5", {
                subject: user.id,
                expiresIn: "2h"
            })

            const viewModel = {
                token: token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }

            return ok(viewModel)
        }catch (error) {
            return serverError(error)
        }
    }
}

