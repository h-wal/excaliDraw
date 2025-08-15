"use client"
import LeftBar from "./leftbar";
import ChatBox from "./chatbox";
import { useState } from "react";
import { userWindowCardInterface } from "../../../types/user";

export default function TaskWindow(){
    const [selectedUser, setSelectedUser] = useState<userWindowCardInterface | undefined>()
    
    return(
        <div id="taskwindow" className=" rounded-3xl border bg-indigo-50 p-4 mx-4 my-4 mr-1 basis-8/12 flex flex-row">
                <LeftBar setSelectedUser={setSelectedUser} />
                <ChatBox user={selectedUser} />
        </div>
    )
}