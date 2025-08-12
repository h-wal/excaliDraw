import "../globals.css";
import UserList from "../components/ui/userlist";

const textimg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="backdrop" className="h-screen w-screen bg-blue-800 text-white flex flex-row ">
            <div id="navbar" className=" rounded-3xl p-4 basis-1/12 mx-4 my-4 flex justify-center items-center ">
                <div>
                    {textimg}
                </div>
            </div>
            <div id="taskwindow" className=" rounded-3xl border bg-purple-50 p-4 mx-4 my-4 mr-1 basis-8/12 flex flex-row">
                <UserList />
                <div className="basis-8/12 rounded-3xl m-2 shadow-xl flex flex-col">
                    <div className="basis-11/12">
                        
                    </div>
                    <div className="bg-white basis-1/12 rounded-3xl text-gray-700 text-m flex flex-row items-center justify-between px-8">
                        <div className="ml-10">
                            <input type="text" name="" placeholder="Type a message here..." id="" />
                        </div>
                        <button>
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <div id="profile" className=" rounded-3xl border bg-purple-50 p-4 text-black basis-3/12 my-4 ml-1 mr-1 flex justify-center">
                <div className="text-2xl flex items-center content-center">
                    {children}
                </div>
            </div> 
        </div>
      </body>
    </html>
  );
}
