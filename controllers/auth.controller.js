import { getUsuario, registerModel } from "../models/auth.model.js"
import { generateToken } from "../services/token.service.js";

export const login = async (req, res)=> {
    try {
        
        const {username, password}= req.body;
        let data = await getUsuario(username, password);

        if (!data) {
            throw new Error("Credenciales incorrectas");
        }

        let token = generateToken(data);
        res.status(200).json({
            msg : 'Bienvenido',
            token : token,
        });
        
    } catch (error) {

        res.status(401).json({
            msg : 'Credenciales incorrectos',
            token : '',
        });
    }
}

export const register = async (req, res)=> {
    let {username, password } = req.body;

    let data = await registerModel(username, password )
    res.status(data.status).json(data.data);
}