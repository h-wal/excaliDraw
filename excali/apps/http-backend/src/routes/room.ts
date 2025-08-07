import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const {prismaClient} = db;

const roomRouter: Router = express.Router();

async function createroomRouterfunction(req: Request, res: Response){
    const authHeader = req.headers['authorization'];
    const id = req.query.id as string;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1] as string

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

    if (typeof decoded == "object"){
        const room = await prismaClient.room.create({
            data:{
                slug : id,
                admin: {
                    connect: {id: decoded.userid}
                }
            }
        })
        return res.status(201).json({ room })
    } 
    else{
        return res.status(401).json({ message: "Invalid token" });
    }
}

async function joinroomRouterfunction(req: Request, res: Response){

}


roomRouter.post("/create", createroomRouterfunction)
roomRouter.post("/join", joinroomRouterfunction)

export default roomRouter