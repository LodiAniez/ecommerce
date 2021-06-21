import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

/** Interfaces */
import DatabaseConfig from '../utils/interfaces'

/** Enums */
import Enums from './../utils/enums'

const config: DatabaseConfig = process.env.NODE_ENV === Enums.Development ? { username: '', password: '', host: '', database: '' } : { username: '', password: '', host: '', database: '' }
const connection = mysql.createConnection(config)

export default connection