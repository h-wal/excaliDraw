"use client"
import { useEffect, useState , useRef} from "react"
import RoomChat from "./roomchat"
import axios from "axios"
import { getSession } from "next-auth/react"
import { RoomtypeInterface } from "../../../types/types"
import { RoomChatTypeInterface } from "../../../types/types"

interface RoomChatWindowProps{
    room: RoomtypeInterface | undefined
}


export default function RoomChatwindow(props: RoomChatWindowProps){

    const [messages , setmessages] = useState<RoomChatTypeInterface []>([])
    const [username, setUsername] = useState<string | null>()

    useEffect(() => {

        if(!props.room){
            return
        }
        
        async function getUrl(){
            console.log(props.room?.id)
            const roomId = props.room?.id
            const url = `http://localhost:3008/getchat`

            try{
                const res = await axios.post(url, {
                    roomId: roomId
                });

                console.log(res.data.message)
                setmessages(res.data.message)
            }catch(e){
                console.log("error from axios request"+e)
            }
        } 
        
        getUrl()

    }, [props.room])

    useEffect(() => {
        async function getsessionusername(){

            const session = await getSession()
            console.log(session?.user.name)
            setUsername(session?.user.name)
        }

        getsessionusername()

    }, [])

    

    return(
        <div className="h-143 overflow-y-auto flex flex-col">
            
            {messages.map((message,index) => (
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