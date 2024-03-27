import jwt from "jsonwebtoken";
import {env} from "../config/default.js";

export const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {

        return res.status(401).json({
            msg: 'Autorizaion requerida'
        });

    }
    token = token.split(" ");
    if (token[0] !== 'Bearer') {
        return res.status(401).json({
            msg: 'Autorizaion requerida'
        });
    }

    jwt.verify(token[1], env.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                msg: 'Autorizaion requerida'
            });
        }
        next();
    })


}