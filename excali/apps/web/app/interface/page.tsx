"use client"
import NavBar from "../components/navBar/navbar";
import Profile from "../components/profile/profile";
import { useState } from "react";
import Window from "../components/window/window";

export default function Interface(){

    const [selectedMenu, setSelectedMenu] = useState("chat")

    return(
        <div id="backdrop" className="h-screen w-screen bg-blue-800 text-white flex flex-row">
            <NavBar setSelectedMenu={setSelectedMenu}></NavBar>
            <Window selectedMenu = {"room"}/>
            <Profile></Profile>
        </div>
    )
}