import { Controller } from "../../presentation/contracts/Controller"
import { CreateUserService } from "../../data/services/createUser";
import { MongoRepository } from "../../infra/repositories/mongoose/mongoRepositoy";
import { UserController } from "../../presentation/controllers/UserController";

export const makeUserController = (): Controller =>{
    const repo = new MongoRepository()
    const service = new CreateUserService(repo)
    const controller = new UserController(service);
    return controller;
}