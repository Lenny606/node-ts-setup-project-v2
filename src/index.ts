import express, {Request, Response, NextFunction} from 'express';
import routerUsers from './routes/users';

const app = express();
const port = 8002

app.use('/api/users', routerUsers )

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, World! This is Server 2');
});

app.listen(port, () => {
    console.log("listen " + port)
})