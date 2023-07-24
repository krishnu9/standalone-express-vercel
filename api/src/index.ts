import Express, {Request, Response} from "express";

const app = Express();

app.get('/ping', (req: Request, res: Response) => {
    console.log("request obj - ", req);
    res.send('pong');
})

app.listen(3000, () => {console.log("Server running on port 3000")})
