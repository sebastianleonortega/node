import { getUsuario } from "../models/auth.model.js"

export const login = async (req, res)=> {
    try {
        const {username, password}= req.query;
        let dta = await getUsuario(username, password);

        if (!data) {
            throw new error("Credenciales incorrectas");
        }
        return 
        
    } catch (error) {
        console.log(error);
        
    }
}