import express, { Router , Request, Response} from "express";
import prismaClient from "./client"


const signUpRouter: Router = express.Router();

async function signUpRouterFunction(req: Request, res: Response){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const userCreated = userModel.createOne
}
    
