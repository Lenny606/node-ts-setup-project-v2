import {Request, Response, NextFunction} from 'express-serve-static-core';
import {CreateUser} from "../dto/CreateUser.dto";
import {CreateUserParams, CreateUserQueryParams} from "../types/query";
import {User} from "../types/response";

export function getUsers(req: Request, res: Response) {
    req.customField
    req.user //typing passport accessible
    res.send([])
}

export function getUserById(req: Request, res: Response) {
    req.session
    req.sessionID //typing session accessible
    res.send([req.params.id])
}

export function createUser(
    req: Request<CreateUserParams, {}, CreateUser, CreateUserQueryParams>,
    res: Response<User>) {
    req.customField
    req.params.active
    req.body.username
    req.query.loginAfterCreate
    res.status(201).send({
        email: "", id: 0, username: ""
    })
}