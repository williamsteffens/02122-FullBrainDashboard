import express from "express"
import cors from "cors"
import dashBoard from "./api/fBrainUsers.route.js"
import weekdays from "./api/weekdays.route.js"

const app = express()

app.use(cors());
app.use(express.json())

app.use("/api/v1/dashBoard", dashBoard)
app.use("/api/v1/weeklyData", weekdays)
app.use("*", (req, res) => res.status(404).json({error: "Error, page not found"}))

export default app;