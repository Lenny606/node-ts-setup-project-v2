import Router from "express"
import {getTranslation} from "../controllers/translations";

export const translationRouter = Router()

translationRouter.get('/:lang', getTranslation)