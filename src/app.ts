import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg" 
import config from "./config";
import { pool } from "./db";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";

const app : Application = express()
 

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));

 
 

app.get('/', (req : Request, res : Response) => {
//   res.send('Hello World!!!')
   res.status(200).json({
    "message" : "Express Server",
    "author" : "Next level",
    })
});

app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

 

export default app