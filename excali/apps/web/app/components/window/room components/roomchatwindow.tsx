"use client"
import { useEffect, useState , useRef} from "react"
import RoomChat from "./roomchat"
import axios from "axios"
import { getSession, useSession } from "next-auth/react"

interface RoomChatWindowProps{
    slug: string
}

interface Message{
    id: number,
    message: string,
    createdAt: string
    roomid? : number
    slug: string
    userId: string
    user: {
        name: string
    }
}

export default function RoomChatwindow(props: RoomChatWindowProps){

    const [messages , setmessages] = useState<Message []>([])
    const [username, setUsername] = useState<string | null>()

    useEffect(() => {

        if(!props.slug){
            return
        }
        
        async function getUrl(){
            console.log(props.slug)
            const roomSlug = props.slug.slice(3,-3)
            const url = `http://localhost:3008/room/chats/${roomSlug}`

            try{
                const res = await axios.get(url);

                console.log(res.data.message)
                setmessages(res.data.message)
            }catch(e){
                console.log("error from axios request"+e)
            }
        } 
        
        getUrl()

    }, [props.slug])

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