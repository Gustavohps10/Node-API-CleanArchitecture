import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import {makeUserController} from "../factories/createUserController"

export default (router: Router): void =>{
    router.post('/user/new', adaptRoute(makeUserController()))
}