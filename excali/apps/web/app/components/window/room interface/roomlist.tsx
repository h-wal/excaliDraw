"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import RoomUserCard from "./roomuserCard";
import { userWindowCardInterface } from "../../../types/user";

interface Room {
    id: number
    slug: string,
}

interface UserListProps{
    setSelectedUser: React.Dispatch<React.SetStateAction<userWindowCardInterface | undefined>> 
}

export default function RoomList({setSelectedUser}: UserListProps) {

    const [rooms, setRooms] = useState<Room[]>([])
    // const [currentUser, setCurrentUser] = useState<User>()

    useEffect(() => {
        axios.get("http://localhost:3008/getRooms/")
            .then((res) => setRooms(res.data))
            .catch((err) => console.log("Error Fetchind Data", err))
    }, []);


    return(
        <div className="bg-gray-100 rounded-2xl h-screen my-2 overflow-y-auto"> 
            {rooms.map((room,index) => (
                <RoomUserCard
                    key={index}
                    uname={room.slug}
                    setSelectedUser={setSelectedUser}
                    >
                </RoomUserCard>
            ))}           
        </div>
    )
}

