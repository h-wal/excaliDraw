import { ChatIcon } from "../icons/navbar/chaticon"
export default function NavBar(){

    return(
        <div id="navbar" className=" rounded-3xl p-4 basis-1/12 mx-4 my-4 flex justify-center items-center ">
            <div>
                {ChatIcon}
            </div>
        </div>
    )

}