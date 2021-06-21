import express from 'express'
import Methods from '../../methods/methods'

const router = express.Router()
const methods = new Methods()

router.get('/login', (req, res) => {
   const accessToken = methods.generateAccessToken({ username: "test", password: "test" })
   res.status(200).send(accessToken)
})

export default router