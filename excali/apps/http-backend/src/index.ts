import express, { application } from "express"
import signUpRouter from "./routes/signup.js"
import signInRouter from "./routes/signin.js"
import roomRouter from "./routes/room.js"
import cors from "cors";
import userRouter from "./routes/users.js";
import getChatRouter from "./routes/chats.js";
import getRoomsRouter from "./routes/getroom.js";
import dotenv from "dotenv"

const app = express()
const PORT = 3008

app.use(cors())
app.use(express.json());
app.use("/signup", signUpRouter)
app.use("/signin", signInRouter)
app.use("/room", roomRouter)
app.use("/getUsers", userRouter)
app.use("/getChat", getChatRouter)
app.use("/getRooms", getRoomsRouter)
app.get("/", (req, res) => {
    res.send("hello")
})
// app.post("/room", roomRouter)

app.listen(PORT)
