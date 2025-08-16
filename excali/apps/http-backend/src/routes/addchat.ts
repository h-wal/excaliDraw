import  express, {Router, Request, Response} from "express";
import db from "@repo/db/client"
import { Prisma } from "@prisma/client"

const {prismaClient} = db

const addChatRouter: Router = express.Router()

async function addChatRouterFunction(req: Request, res: Response){
    const chat = req.body.chat as string
    const roomslug = req.body.roomslug as string
    const userId = req.body.userId as string

    const response = await prismaClient.chat.create({
        data: {
            message: chat,
            userId: userId
            // roomslugfk:{
            //     connect: {slug: roomslug}
            // },
            roomslug: roomslug
        } as unknown as Prisma.ChatUncheckedCreateInput
    })

    console.log(response)

    
}

addChatRouter.post("/", addChatRouterFunction)

export default addChatRouter