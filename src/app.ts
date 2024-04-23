import express, { Request, Response } from 'express'; 
import {PORT} from "./config"
import main from 'dotenv'
import {connectDB} from "./db_config"


main.config();

const app = express();

connectDB().then(()=>{
    console.log("Connected to the database")
}).catch((err)=>{
    console.log(err)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express.js with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
