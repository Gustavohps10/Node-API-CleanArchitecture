import { Controller } from "../../presentation/contracts/Controller"
import { UserAuthenticationService } from "../../data/services/userAuthentication";
import { MongoRepository } from "../../infra/repositories/mongoose/mongoRepositoy";
import { UserAuthenticationController } from "../../presentation/controllers/UserAuthenticationController";

export const makeUserAuthenticationController = (): Controller =>{
    const repo = new MongoRepository()
    const service = new UserAuthenticationService(repo)
    const controller = new UserAuthenticationController(service);
    return controller;
}