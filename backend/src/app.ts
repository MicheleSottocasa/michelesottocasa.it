import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { userRouter } from "./users/users.routes"
import Logger from "./utils/Logger"

//-----------------------------------------------------------

dotevnv.config()
const debug = process.env.DEBUG === "true"
const log =  new Logger(debug);

if (!process.env.PORT) {
    log.error(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())
app.use((req, res, next) => {
    log.info(
        `Request received: ${req.method} ${req.url}`);
    log.info(`Request body: ${JSON.stringify(req.body)}`);
    log.info(`Request query: ${JSON.stringify(req.query)}`);
    next();
})

app.use('/', userRouter);

app.listen(PORT, () => {
    log.info(`Server is listening on port ${PORT}`)
})
