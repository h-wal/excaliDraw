import { useEffect } from "react"
import { userWindowCardInterface } from "../../../types/user"
import RoomChat from "./roomchat"
import axios from "axios"
import { getSession } from "next-auth/react"
import { Session } from "next-auth"
interface ChatWindowProps{
    selectedUser: string
}

export default  function RoomChatwindow(props: ChatWindowProps){

    useEffect(() => {

        if(!props.selectedUser){
            return
        }
        
        async function getUrl(){
            const session: Session | null = await getSession()
            const user = session?.user?.name
            const toUser = props.selectedUser.slice(1,-1)
            const url = `http://localhost:3008/getChat?from=${user}to=${toUser}`

            console.log(url)

            try{
                const res = await axios.get(url);
                console.log(res.data)
            }catch(e){
                console.log("error from axios request"+e)
            }
        } 
        
        getUrl()

        async function getChats(url: string){
            const res = await axios.get(url)
        }
    })

    
    //I need to get all the existing chats of the 
    // need the user and usertochat or name

    //establish a ws connection between them now

    //get the chats and render them now 
    

    return(
        <div className="h-143 overflow-y-auto flex flex-col">
            
            <RoomChat sent={true} message="hi there"></RoomChat>
            <RoomChat sent={false} message="hi there"></RoomChat>
            <RoomChat sent={false} message="how are you"></RoomChat>
            <RoomChat sent={true} message="I am fine"></RoomChat>
            <RoomChat sent={false} message="hi there"></RoomChat>
            <RoomChat sent={true} message="good morning"></RoomChat>
        </div>
    )
}