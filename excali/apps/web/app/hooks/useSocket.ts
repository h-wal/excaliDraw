import { useEffect, useState } from "react";

export default function useSocket(username?: string | null){

    console.log("from use Socket" + username)
    const WS_URL = process.env.WS_URL
    console.log("wsurl = "+WS_URL)
    const [loading, setLoading] = useState<boolean>(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {

        if(!username){
            console.log("invalid userId for webSocket")
            return;
        } 
        console.log("from the ws server"+username)
        const ws = new WebSocket(`http://localhost:8000?token=${username}`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }


        return () => {
        ws.close();
        };
        
    },[username])

    return{
        socket,
        loading
    }

}