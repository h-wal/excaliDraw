import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";

const wss = new WebSocketServer( {port : 8000} );

wss.on('connection', function connection(ws){

    ws.on('message', function message(data){
        ws.send("pong");
    });

});

function checkUser(token: string): boolean{

    const decoded = jwt.verify()

}

