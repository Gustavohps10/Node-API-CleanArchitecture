import { Controller } from "../../presentation/contracts/Controller"
import { MongoRepository } from "../../infra/repositories/mongoose/mongoRepositoy";
import { FindUserByIdService } from "../../data/services/findUserById";
import { FindUserByIdController } from "../../presentation/controllers/FindUserByIdController";

export const makeFindUserByIdController = (): Controller =>{
    const repo = new MongoRepository()
    const service = new FindUserByIdService(repo)
    const controller = new FindUserByIdController(service);
    return controller;
}