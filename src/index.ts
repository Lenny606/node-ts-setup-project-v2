import express, {Request, Response, NextFunction} from 'express';
import routerUsers from './routes/users';
import {healthRouter} from "./routes/health";

const app = express();
const port = 8002

app.use('/api/users', routerUsers)
app.use('/api/health', healthRouter)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, World! This is Server 2');
});

app.listen(port, () => {
    console.log("listen " + port)
})