import  Jwt  from "jsonwebtoken";
import { env } from "../config/default.js";

export const verifyToken = (req, res, next)=> {
let token = req.headers['autorization'];

if (!token) {

   return  res.status(401).json({
        msg : 'autorizaion requerida'
    });
    
}
token = token.split(" ");
if (token[0] !== 'Bearer') {
    return  res.status(401).json({
        msg : 'autorizaion requerida'
    });
}

Jwt.verify(token[1], env.secretKey, (err, decoded)=> {
    if (err) {
        return  res.status(401).json({
            msg : 'autorizaion requerida'
        });
    }
    next();
})


}