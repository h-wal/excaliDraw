"use client"
import NavBar from "../components/navBar/navbar";
import TaskWindow from "../components/window/chats interface/taskwindow";
import Profile from "../components/profile/profile";
import { useState } from "react";
import RoomWindow from "../components/window/liveinterface/roomwindow";


export default function Interface(){

    const [selectedMenu, setSelectedMenu] = useState("room")

    return(
        <div id="backdrop" className="h-screen w-screen bg-blue-800 text-white flex flex-row ">
            <NavBar></NavBar>
            {(selectedMenu === "chat") ? <TaskWindow></TaskWindow> : <div />}
            {(selectedMenu === "room") ? <RoomWindow></RoomWindow> : <div />}
            <Profile></Profile>
        </div>
    )
}