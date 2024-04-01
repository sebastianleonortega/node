import {
    deleteProductById,
    getProductoModel,
    getProductoUnicoModel,
    postProductModel,
    putProductModel
} from "../models/producto.model.js";


export const getProducts = async (req, res)=> {
    let data = await getProductoModel()
    res.status(data.status).json(data.data);
}

export const getProductById = async (req, res) =>  {
        let {id} = req.params;
        let data = await getProductoUnicoModel(id)
        res.status(data.status).json(data.data)
}

export const createProduct = async (req, res)=> {
    let dataRequest = req.body;
    let data = await postProductModel(dataRequest )
    res.status(data.status).json(data.data);
}

export const  updateProduct = async (req, res) => {
    let {id} = req.params;
    let dataRequest = req.body;
    let data = await putProductModel(dataRequest, id)
    res.status(data.status).json(data.data);
}

export const deleteProduct = async (req, res) => {
    let {id} = req.params;
    let data = await deleteProductById(id)
    res.status(data.status).json(data.data);
}