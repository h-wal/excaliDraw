import SearchIcon from "../icons/searchIcon"
import SearchBar from "./searchbar"
import UserList from "./userlist"


export default function LeftBar(){
    return(
        <div className="bg-white basis-4/12 rounded-3xl m-4 shadow-2xl flex p-4 flex-col">
            <div className="text-black text-2xl font-sans text-gray-800 font-bold my-4">
                Chat
            </div>
            <SearchBar />
            <UserList />
        </div>
    )
} 
