import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateUserController } from "../factories/createUserController"
import { makeReadUsersController } from "../factories/readUsersController";

export default (router: Router): void =>{
    router.post('/users/new', adaptRoute(makeCreateUserController()))
    router.get('/users/', adaptRoute(makeReadUsersController()))
}