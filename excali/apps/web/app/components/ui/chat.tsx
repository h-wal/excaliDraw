
interface chatProps{
    message?: string | "this is the message",
    profile?: string,
    time?: string
    sent: boolean
}
export default function Chat(props: chatProps){
    
    return(
        <div className={`${ props.sent ? "bg-pink-400" : "bg-white" } rounded-3xl p-4 mx-10 my-4 ${props.sent ? "text-white" : "text-gray-700"} text-sm w-2/3 shadow-lg ${props.sent ? "ml-auto" : "text-gray-700"}`}>
            this is the message
            asdgaslgf
            asdfadsggasdj;;gapasdgg
            adsg
            sadfhlas\adgs
            agadg
            adgs
            asg

        </div>
    )
}