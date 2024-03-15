import { getUsuario } from "../models/auth.model.js"
import { generateToken } from "../services/token.service.js";

export const login = async (req, res)=> {
    try {
        const {username, password}= req.query;
        let dta = await getUsuario(username, password);

        if (!data) {
            throw new error("Credenciales incorrectas");
        }

        let token = generateToken(data);
        res.status(200).json({
            token : token,
            success: true,
            msg : 'Bienvenido'
        });
    } catch (error) {
        console.log(error);

        res.status(401).json({
            token : '',
            success: false,
            msg : 'datos incorrectos'
        });
    }
}


// CREATE TABLE USUARIO (
//     ID SERIAL,
//     USERNAME VARCHAR(200),
//     PASSWORD VARCHAR(200),
//     CONSTRAINT PK_USUARIO PRYMARY KEY (ID, USERNAME)
//     )
    
//     INSERT INTO usuario (USENAME, PASSWORD)
//     VALUES ('sebastian', '1234')
    
//     select * from usuario