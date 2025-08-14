import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken"

const {prismaClient} = db

const getChatRouter: Router = express.Router()

function getChatRouterFunction(req: Request, res: Response){

    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if(!authHeader){
        res.status(410).send({
            message: "no token"
        })
        return
    }
    const token = authHeader?.split(" ")[1] as string;

    function findUser(token: string){
            const payload: any =  jwt.verify(token, "Ilovekirti");
            const user = payload.user;
            res.send({
                user
            }) 
        }
    
    findUser(token)
    res.send({message: Error})

}

getChatRouter.get("/", getChatRouterFunction)

export default getChatRouter


