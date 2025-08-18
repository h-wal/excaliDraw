"use client"
import { userWindowCardInterface } from "../../../types/types"
import { RoomtypeInterface } from "../../../types/types"
import SendIcon from "../../icons/sendicon"
import { useState, useEffect, useRef } from "react"
import { getSession } from "next-auth/react"
import axios from "axios"


interface inputBarProps{
    room: RoomtypeInterface | undefined
}

export default function RoomInputBar(props: inputBarProps){

    const user = useRef<any>(null)

    useEffect(() => {

        async function getUserDetails(){
            const session = await getSession()
            user.current = session?.user

        console.log(user)
        console.log


        const response = await axios.post("http://localhost:3008/getuserId",{
            userName: user?.current.name,
            userEmail: user?.current.email
        })

        user.current = response.data.id
        console.log(user.current)
    }
        getUserDetails()

    }, [])

    const [message, setmessage] = useState("")

    function sendMessage(message: string){
        console.log(user.current)
        axios.post("http://localhost:3008/addChat", {
            chat: message,
            userId: user.current, 
            roomId: props.room?.id
        })
    }

    return(
        <div className="bg-white basis-1/12 rounded-3xl text-gray-700 text-m flex flex-row items-center justify-between">
            <div className="w-full h-full rounded-3xl relative flex items-center">
                <input value={message} className="absolute w-full h-full rounded-3xl px-4 py-2" type="text" name="" placeholder="Type a message here..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setmessage(e.target.value)}} onKeyDown={(e) => {if (e.key == "Enter") sendMessage(message), setmessage("")}}/>
                <button className= "absolute right-1/20 text-blue-700 border-2 border-blue-700 p-2 rounded-4xl cursor-pointer" onClick={() => {sendMessage(message), setmessage("")}}>
                    <SendIcon></SendIcon>
                </button>
            </div>
        </div>
    )
}