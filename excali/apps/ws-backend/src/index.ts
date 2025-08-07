import { WebSocketServer, WebSocket} from "ws";
import jwt from "jsonwebtoken";
import dotenv, { parse } from "dotenv"
import db from "@repo/db/client";
const {prismaClient} = db
dotenv.config()

const wss = new WebSocketServer( {port : 8000} );

interface User {
    ws: WebSocket,
    rooms: string[],
    userid: string
}

const users: User[] = [];

function checkUser(token: string): string | null {

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log(decoded)
        if (typeof decoded == "string"){
            return null;
        } 
        
        if (!decoded || !decoded.userid){
            return null;
        }

        else{
            return decoded.userid;
        }
    } catch(e){
        console.log(e)
        return null
    }
}

wss.on('connection', function connection(ws, request){

    const url = request.url;
    if(!url){
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    console.log(queryParams)

    let token = "";

    if (url.includes("token=")) {
    const queryParams = new URLSearchParams(url.split('?')[1]);
    token = queryParams.get("token") || "";
    } else if (url.includes("?")) {
    //@ts-ignore
    token = url.split('?')[1]; // fallback: entire token is after ?
    }
    console.log(token)

    const userid = checkUser(token);

    console.log(userid)


    
    if(userid == null){ 
        ws.close();
        return;
    }

    console.log(users)

    users.push({
        ws,
        userid,
        rooms: []
    })

    console.log(users)

    // {
    //     type: JoinRoom | CreateRoom | Chat,
    //     message: message,
    //     roomid: roomid
    // }

    ws.on('message', async function message(data){

        let parsedData;
        console.log(data)
        if(typeof data !== "string"){
            parsedData = JSON.parse(data.toString())
        } else{
            parsedData = JSON.parse(data)
        }
        
        if(parsedData.type == "JoinRoom"){
            const user = users.find(x => x.ws === ws)
            if(!user){
                return null
            }
            user.rooms.push(parsedData.roomId)
        }

        if(parsedData.type == "LeaveRoom"){
            const user = users.find(x => x.ws === ws)
            if(!user){
                return null
            }

            user.rooms = user?.rooms.filter(x => x === parsedData.roomId)
        }

        console.log("message received")
        console.log(parsedData)

        if(parsedData.type == "chat"){
            const roomid = parsedData.roomid;
            const message = parsedData.message;

            await prismaClient.chat.create({
                data: {
                  roomId: Number(roomid),
                  message,
                  userId : userid
                }
            });

            users.forEach((user) => {
                if(user.rooms.includes(roomid)){
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomid
                    }))
                }
            })

            
        }
    });

});