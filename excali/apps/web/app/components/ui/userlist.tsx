"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import UserCard from "./userCard";

interface User {
    name: string,
    lastActive?: number,
    profileUrl?: string
}

export default function UserList() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        axios.get("http://localhost:3008/getUsers/")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log("Error Fetchind Data", err))
    }, []);


    return(
        <div className="bg-gray-100 rounded-2xl h-screen my-2 overflow-y-auto"> 
            {users.map((user,index) => (
                <UserCard
                    key={index}
                    uname={user.name}
                    >
                </UserCard>
            ))}           
        </div>
    )
}

