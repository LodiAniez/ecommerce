import jwt from "jsonwebtoken"

export default class Methods {
   constructor () { }
   
   generateAccessToken(data: any) {
      const generate = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 })
      return generate
   }
}