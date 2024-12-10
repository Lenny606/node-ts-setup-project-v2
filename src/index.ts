import express, {Request, Response, NextFunction} from 'express';
import routerUsers from './routes/users';
import {healthRouter} from "./routes/health";
import cors from "cors";
import * as path from "node:path";
import * as fs from "node:fs";
import {ErrorResponse} from "./types/response";
import {translationRouter} from "./routes/translation";

const app = express();
const port = 8002
const corsOptions = {
    origin: 'https://localhost:8002',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/api/users', routerUsers)
app.use('/api/health', healthRouter)

//translations
app.use('/translations', translationRouter)


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, World! This is Server 2');
});

app.listen(port, () => {
    console.log("listen " + port)
})