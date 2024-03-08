import { postProduct } from "../controllers/producto.controller.js";
import pgService from "../services/pg.service.js";

export const getProductoModel = async () => {
    const pg = new pgService();
        return await pg.connection.query("SELECT * FROM PRODUCTO")
}

export async function  getProductoUnicoModel (id) {
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(`SELECT * FROM PRODUCTO WHERE ID_PRODUCTO = $1`, [id]);
    } catch (error) {
        return 'No hay datos';
    }
   
}

export const postProductModel = async ( nombre, detalle) => {
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(`INSERT INTO PRODUCTO (nombre, detalle) VALUES ($1, $2) RETURNING *`, [nombre, detalle]);
    } catch (error) {
        return 'No hay datos';
    }
   
}