import { Router } from "express";
import {getProduct, getProductById, postProduct} from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductValidator } from "../validators/producto.validator.js";

const routerProduct = Router();

routerProduct.get("/", getProduct );
routerProduct.get("/:id", getProductById );
routerProduct.post("/",validate(postProductValidator), postProduct );

export default routerProduct;