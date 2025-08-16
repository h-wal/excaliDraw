import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const {prismaClient} = db;

const roomRouter: Router = express.Router();

async function getChatsRouterfunction(req: Request, res: Response){
    console.log("got request")
    const slug = req.params.slug;
    const message = await prismaClient.chat.findMany({
        where:{
            slug: slug
        },
        include:{
            user:{
                select:{
                    name: true
                }
            }
        },
        orderBy:{
            id: "desc"
        },
        take: 50
    });

    res.json({message})
}

roomRouter.get("/chats/:slug", getChatsRouterfunction)

export default roomRouter