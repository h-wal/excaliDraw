import express, { Router , Request, Response} from "express";
import db from "@repo/db/client";
import jwt from "jsonwebtoken";

const {prismaClient} = db;

const roomRouter: Router = express.Router();

async function roomRouterFunction(req: Request, res: Response){
    
}