import  jwt  from "jsonwebtoken"
import { env } from "../config/default.js"

export const generateToken = (data)=> {

    let token = jwt.sign({
        data: data,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, env.secretKey)

    return token;
}