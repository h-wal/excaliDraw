import { SetStateAction, Dispatch } from "react"
import { ChatIcon } from "../icons/navbar/chaticon"

interface navBarProps{
    setSelectedMenu: Dispatch<SetStateAction<string>>
}
export default function NavBar({setSelectedMenu}: navBarProps){

    return(
        <div id="navbar" className=" rounded-3xl p-4 basis-1/12 mx-4 my-4 flex justify-center items-center ">
            <div>
                
                {ChatIcon}
            </div>
        </div>
    )

}