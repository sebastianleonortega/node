import { getProductoModel, getProductoUnicoModel, postProductModel } from "../models/producto.model.js";


export const getProducto = async (req, res)=> {
    let msg = await getProductoModel()
    res.status(200).json({succes: true, msg : msg});
}

export const getProductoUnico = async (req, res) =>  {
    try {
        let {id} = req.params;
        let data = await getProductoUnicoModel(id)
        res.status(200).json({succes: true, data : data})
    } catch (error) {
        res.status(200).json({succes: true, data : "No hay datos"})
    }
   
}

export const postProduct = async (req, res)=> {
    let {nombre, detalle } = req.body;

    let data = await postProductModel(nombre, detalle )
    res.status(200).json({succes: true, data : data});
}


// CREATE TABLE producto(
//     id_producto serial,
//         nombre varchar(4000),
//         detalle varchar(4000),
//         valor numeric,
//         img varchar(4000),
//         CONSTRAINT pk_id_producto primary key (id_producto)
//     );


// INSERT INTO PRODUCTO (detalle, nombre)
// values ('descripcion', 'zapato3')

// select * from producto