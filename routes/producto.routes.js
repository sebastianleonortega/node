import { Router } from "express";
import {
    deleteProduct,
    getProducts,
    getProductById,
    createProduct,
    updateProduct
} from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductValidator } from "../validators/producto.validator.js";

const routerProduct = Router();

routerProduct.get("/", getProducts );
routerProduct.get("/:id", getProductById );
routerProduct.post("/",validate(postProductValidator), createProduct );
routerProduct.put("/:id", validate(postProductValidator), updateProduct);
routerProduct.delete("/:id", deleteProduct);

export default routerProduct;