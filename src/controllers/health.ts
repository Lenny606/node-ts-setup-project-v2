import {Request, Response, NextFunction} from 'express-serve-static-core';
import {Health} from "../types/response";

export const getHealth = (req: Request, res: Response<Health>) => {
    res.json({status: 200, success: true, message: 'OK'})
}
