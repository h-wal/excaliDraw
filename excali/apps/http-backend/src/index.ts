import express from "express"
import signUpRouter from "./routes/signup.js"
import signInRouter from "./routes/signin.js"
// import signInRouter from "./routes/signin.js"

const app = express()
const PORT = 3008

app.use(express.json());
app.use("/signup", signUpRouter)
app.use("/signin", signInRouter)
app.get("/", (req, res) => {
    res.send("hello")
})
// app.post("/room", roomRouter)

app.listen(PORT)
