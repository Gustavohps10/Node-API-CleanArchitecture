import { Controller } from "../../presentation/contracts/Controller"
import { CreateUserService } from "../../data/services/createUser";
import { MongoRepository } from "../../infra/repositories/mongoose/mongoRepositoy";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";

export const makeCreateUserController = (): Controller =>{
    const repo = new MongoRepository()
    const service = new CreateUserService(repo)
    const controller = new CreateUserController(service);
    return controller;
}