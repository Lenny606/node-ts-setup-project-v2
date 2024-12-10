import {Request, Response} from 'express-serve-static-core';
import path from "node:path";
import fs from "node:fs";

export const getTranslation = (req: Request, res: Response) => {
    const lang = req.params.lang
    const parsedLang = lang.split('-')[0]
    const fileName = path.join(__dirname, "translations", parsedLang + ".json");

    fs.readFile(fileName, (err, data) => {
        if (err) {
            return res.status(404).send({message: err.message})
        }
        try {
            const jsonData = JSON.parse(data.toString())
            res.set("Cache-control", "public, max-age=3600")
            return res.status(200).send({data: jsonData, success: true})
        } catch (err: any) {
            return res.status(500).send({message: err.message})
        }
    })
}
