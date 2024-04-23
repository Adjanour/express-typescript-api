import express, { Request, Response } from 'express'; 
import {PORT} from "./config"
import main from 'dotenv'

main.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express.js with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
