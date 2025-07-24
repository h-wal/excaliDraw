import express, { Router , Request, Response} from "express";


const signUpRouter: Router = express.Router();

async function signUpRouterFunction(req: Request, res: Response){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const username = userModel.createOne
}
    
