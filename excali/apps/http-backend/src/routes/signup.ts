import express, { Router, RouterOptions} from "express"

const signUpRouter:Router = express.Router();

const options: RouterOptions= 

async function signUpRouterFunction(req: Request, res: Response){
    import express, { Router , Request, Response} from "express";
import {prismaClient} from "@repo/db/client"


const signUpRouter: Router = express.Router();

async function signUpRouterFunction(req: Request, res: Response){

    //add zod validation here
    const parsedData = req.body;
    
    const username = parsedData.username;
    const password = parsedData.password;
    const email = parsedData.email;


    try{
        const userCreated = await prismaClient.user.create({
            data:{
                email: email,
                username: username,
                password: password
            }
        })
    } catch(e){
        res.status(403).send("eror"+e)
    }

    res.status(200).send("User Created Successfully")
}

module.exports({
})
    

}