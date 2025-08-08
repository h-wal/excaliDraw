import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const {prismaClient} = db;

const roomRouter: Router = express.Router();

async function getChatsRouterfunction(req: Request, res: Response){
    const roomId = Number(req.params.roomId);
    const message = await prismaClient.chat.findMany({
        where:{
            roomId: roomId
        },
        orderBy:{
            id: "desc"
        },
        take: 50
    });

    res.json({
        message: message
    })
}

roomRouter.get("/chats/:roomId", getChatsRouterfunction)

export default roomRouter