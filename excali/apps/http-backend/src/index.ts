import express from "express"
import signUpRouter from "./routes/signup.js";

const app = express();
const PORT = 3008;

app.post("/signup", signUpRouter)
// app.post("/signin", signInRouter)
// app.post("/room", roomRouter)


app.listen(PORT)