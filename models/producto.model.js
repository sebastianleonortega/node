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

export const postProductModel = async ( nombre, detalle, valor, img) => {
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(`INSERT INTO PRODUCTO (nombre, detalle, valor, img) VALUES ($1, $2, $3, $4) RETURNING *`, [nombre, detalle, valor, img]);
    } catch (error) {
        return 'No hay datos';
    }
   
}

export const putProductModel = async (dataRequest, product_id) => {
    // try {
    //     const pg = new pgService()
    //
    //     const productExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCT WHERE PRODUCT_ID = $1`, [product_id]);
    //
    //     if (!productExists){
    //         return {data: 'El producto que intentas actualizar no existe :(', status: 404}
    //     }
    //
    //     const productNameExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCT WHERE PRODUCT_NAME = $1`, [dataRequest.product_name]);
    //
    //     if (productNameExists[0] && productNameExists[0].product_id !== product_id){
    //         return {data: 'Ya existe un producto con ese nombre :(', status: 400}
    //     }
    //
    //     await pg.connection.query(
    //         `UPDATE PRODUCT
    //         SET PRODUCT_NAME = $1,
    //         PRODUCT_DETAIL = $2,
    //         PRODUCT_PRICE = $3
    //         WHERE PRODUCT_ID = $4`,
    //         [dataRequest.product_name, dataRequest.product_detail, dataRequest.product_price, product_id])
    //
    //     return {data: 'Producto actualizado con éxito', status: 200}
    //
    // } catch (error) {
    //     return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    // }
}