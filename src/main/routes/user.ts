import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateUserController } from "../factories/createUserController"
import { makeFindUserByIdController } from "../factories/findUserByIdController";
import { makeReadUsersController } from "../factories/readUsersController";

export default (router: Router): void =>{
    router.post('/users/new', adaptRoute(makeCreateUserController()))
    router.get('/users/', adaptRoute(makeReadUsersController()))
    router.get('/users/:id', adaptRoute(makeFindUserByIdController()))
}