import cors from "cors"
import dotenv from "dotenv"
import express, { Request, Response } from "express"
import "express-async-errors"

import commentRouter from "./routers/commentRouter"
import { errorHandler } from "./middlewares/errorHandler"

dotenv.config()
const app = express()
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.get("/", (req: Request, res: Response) => res.send("Online"))
app.use(commentRouter)

app.use(errorHandler)

export default app
