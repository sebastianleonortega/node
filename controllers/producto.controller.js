import {getProductoModel, getProductoUnicoModel, postProductModel, putProductModel} from "../models/producto.model.js";


export const getProduct = async (req, res)=> {
    let msg = await getProductoModel()
    res.status(200).json({succes: true, msg : msg});
}

export const getProductById = async (req, res) =>  {
    try {
        let {id} = req.params;
        let data = await getProductoUnicoModel(id)
        res.status(200).json({succes: true, data : data})
    } catch (error) {
        res.status(200).json({succes: true, data : "No hay datos"})
    }
   
}

export const postProduct = async (req, res)=> {
    let {nombre, detalle, valor, img  } = req.body;

    let data = await postProductModel(nombre, detalle, valor, img )
    res.status(200).json({succes: true, data : data});
}

 export const putProduct = async (req, res) => {
    let {idProduct} = req.params;
    let dataRequest = req.body;
    let data = await putProductModel(dataRequest, idProduct)
    res.status(data.status).json(data.data);
}


// CREATE TABLE producto(
//     id_producto serial,
//         nombre varchar(4000),
//         detalle varchar(4000),
//         valor numeric,
//         img varchar(4000),
//         CONSTRAINT pk_id_producto primary key (id_producto)
//     );


// INSERT INTO PRODUCTO (detalle, nombre, valor, img)
// values ('descripcion', 'zapato nike', 4000, 'img')

// select * from producto