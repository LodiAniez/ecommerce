/** Libraries */
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

/** Middlewares */
import parser from 'body-parser'
import cors from 'cors'
import { RouteModule } from './module'

/** Utilities */
import EnvironmentVariables from './utils/enums'

const app = express();
const port = process.env.NODE_ENV === EnvironmentVariables.Development 
           ? process.env.DEV_PORT 
           : process.env.PROD_PORT

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())

/** Route modules */
new RouteModule({ app })

app.listen(port, () => console.log(`Listening on port ${ port }`))