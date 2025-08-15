import RoomLeftBar from "../room interface/roomleftbar"
import RoomChatBox from "../room interface/roomchatbox"

export default function RoomWindow () {

    return(
        <div className="flex flex-row w-full">
            <RoomLeftBar></RoomLeftBar>
            <RoomChatBox></RoomChatBox>
        </div>
    )
}