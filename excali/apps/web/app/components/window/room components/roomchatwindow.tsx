"use client"
import { useEffect, useState , useRef} from "react"
import RoomChat from "./roomchat"
import axios from "axios"
import { getSession } from "next-auth/react"
import { RoomtypeInterface } from "../../../types/types"
import { RoomChatTypeInterface } from "../../../types/types"
import useSocket from "../../../hooks/useSocket"

interface RoomChatWindowProps{
    room: RoomtypeInterface | undefined
}


export default function RoomChatwindow(props: RoomChatWindowProps){

    const [messages , setmessages] = useState<RoomChatTypeInterface []>([])
    const [username, setUsername] = useState<string | null>()
    const [userId, setUserId] = useState<string | null>(null)

    useEffect(() => {

        if(!props.room){
            return
        }
        
        
        async function getPrevMessages(){
            console.log(props.room)
            console.log(props.room?.id)
            const roomId = props.room?.id
            const url = `http://localhost:3008/getchat`

            try{
                const res = await axios.post(url, {
                    roomId: roomId
                });

                setmessages(res.data.message)
            }catch(e){
                console.log("error from axios request"+e)
            }
        } 

        getPrevMessages()

    }, [props.room])

    useEffect(() => {
        async function getsessionusername(){

            const session = await getSession()
            console.log(session?.user.name)
            setUsername(session?.user.name)
        }

        getsessionusername()

    }, [])

    const socketState =  useSocket((username))
    const socket = socketState?.socket
    const loading = socketState?.loading
    console.log(socket, loading)    

    return(
        <div className="h-143 overflow-y-auto flex flex-col space-y-reverse">
            
            {messages.slice().reverse().map((message,index) => (
                <RoomChat 
                    id={message.id}
                    key={index}
                    sent={(username === message.user.name) ? true : false}
                    message={message.message}
                    userName={message.user.name}
                    >
                </RoomChat>
            ))}
        </div>
    )
}