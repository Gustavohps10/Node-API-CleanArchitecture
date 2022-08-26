import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateUserController } from "../factories/createUserController"
import { makeFindUserByIdController } from "../factories/findUserByIdController";
import { makeReadUsersController } from "../factories/readUsersController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

export default (router: Router): void =>{
    router.post('/users/new', adaptRoute(makeCreateUserController()))
    router.get('/users/', ensureAuthenticated,adaptRoute(makeReadUsersController()))
    router.get('/users/:id', ensureAuthenticated,adaptRoute(makeFindUserByIdController()))
}