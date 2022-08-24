import { findUserByIdUseCase } from "../../domain/useCases/findUserById";
import { Controller } from "../contracts/Controller";
import { HttpResponse, HttpRequest, serverError, ok } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class FindUserByIdController implements Controller{
    constructor(
        private readonly findUserById: findUserByIdUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse<UserViewModel>> {
        try{
            const id = req.params.id
            const user = await this.findUserById.execute(id);
            const viewModel = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            return ok(viewModel)
        }catch (error) {
            return serverError(error)
        }
    }
}