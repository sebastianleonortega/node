import pgService from "../services/pg.service.js";

const pg = new pgService();

export const getProductoModel = async () => {
    try {
        const product = await pg.connection.query("SELECT * FROM PRODUCTO");

        if (!product) {
            return {data: "No hay ningun producto", status: 404}
        }
        return {data: product, status: 200}

    } catch (error) {
        return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    }
}

export async function getProductoUnicoModel(id) {
    try {
        const product = await pg.connection.oneOrNone(`SELECT * FROM PRODUCTO WHERE ID_PRODUCTO = $1`, [id]);

        if (!product) {
            return {data: "Producto no encontrado", status: 404}
        }

        return {data: product, status: 200}
    } catch (error) {
        return {data: 'tenemos problemas, reintenta más tarde', status: 500};
    }

}

export const postProductModel = async (dataRequest) => {
    try {

        const producExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCTO WHERE nombre = $1`, [dataRequest.nombre])

        if (producExists) {
            return {data: 'Ya existe un producto con este nombre', status: 400}
        }

        const productResponse = await pg.connection.oneOrNone(`INSERT INTO PRODUCTO (nombre, detalle, valor, img) VALUES ($1, $2, $3, $4) RETURNING *`, [dataRequest.nombre, dataRequest.detalle, dataRequest.valor, dataRequest.img]);

        return {data: productResponse, status: 201}

    } catch (error) {
        return {data: 'tenemos problemas, reintenta más tarde', status: 500};
    }

}

export const putProductModel = async (dataRequest, id) => {
    try {
        const productExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCTO WHERE id_producto = $1`, [id]);
        if (!productExists) {
            return {data: 'El producto que intentas actualizar no existe!', status: 404}
        }

        const productNameExists = await pg.connection.query(`SELECT * FROM PRODUCTO WHERE nombre = $1`, [dataRequest.nombre]);
        if (productNameExists[0] && productNameExists[0].id_producto != id) {
            return {data: 'Ya existe un producto con ese nombre!', status: 400}
        }

        await pg.connection.query(
            `UPDATE PRODUCTO 
            SET nombre = $1, 
            detalle = $2, 
            valor = $3,
            img = $4
            WHERE id_producto = $5 `,
            [dataRequest.nombre, dataRequest.detalle, dataRequest.valor, dataRequest.img, id])

        return {data: 'Producto actualizado con éxito', status: 200}

    } catch (error) {
        return {data: 'tenemos problemas, reintenta más tarde', status: 500}
    }
}

export const deleteProductById = async (id) => {
    try {
        const existsProduct = await pg.connection.oneOrNone(`SELECT * FROM PRODUCTO WHERE id_producto = $1`, [id])
        if (!existsProduct) {
            return {data: 'El producto que intenta eliminar no existe!', status: 404}
        }

        await pg.connection.query(`DELETE FROM PRODUCTO WHERE id_producto= $1`, [id]);
        return {data: "Producto eliminado exitosamente", status: 200};


    } catch (error) {
        return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    }
}