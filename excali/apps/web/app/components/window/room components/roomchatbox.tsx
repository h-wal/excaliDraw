import { userWindowCardInterface } from "../../../types/types" 
import RoomInputBar from "./roomchatinpbar"
import RoomChatwindow from "./roomchatwindow"
import { RoomtypeInterface } from "../../../types/types"

interface userProp{
    selectedRoom: RoomtypeInterface | undefined
}


export default function RoomChatBox(prop: userProp){


    return(
        <div className="basis-8/12 rounded-3xl m-2 shadow-xl flex flex-col">
            <div className="basis-11/12 flex flex-col">
                <div id="header " className="basis-1/7 text-black flex flex-row items-center p-5 gap-3 bg">
                    {(prop.selectedRoom?.slug) && <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>}
                    <div className="text-black flex items-center">
                        { (prop.selectedRoom?.slug) ? (prop.selectedRoom?.slug): 'Kindly Select a Room to Chat'}
                    </div>
                </div>
                <RoomChatwindow  room={prop.selectedRoom}/>         
            </div>
            <RoomInputBar room={prop.selectedRoom} />
        </div>
    )
}