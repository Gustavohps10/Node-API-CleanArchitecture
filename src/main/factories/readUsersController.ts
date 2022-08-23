import { Controller } from "../../presentation/contracts/Controller"
import { ReadUsersService } from "../../data/services/readUsers";
import { MongoRepository } from "../../infra/repositories/mongoose/mongoRepositoy";
import { ReadUsersController } from "../../presentation/controllers/ReadUsersController";

export const makeReadUsersController = (): Controller =>{
    const repo = new MongoRepository()
    const service = new ReadUsersService(repo)
    const controller = new ReadUsersController(service);
    return controller;
}