import express, { Router , Request, Response} from "express";
import {prismaClient} from "@repo/db/client"


const signUpRouter: Router = express.Router();

async function signUpRouterFunction(req: Request, res: Response){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const userCreated = prismaClient.crea
}
    
