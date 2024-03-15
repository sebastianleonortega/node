import { Router } from "express";
import { getProducto, getProductoUnico, postProduct } from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductValidator } from "../validators/producto.validator.js";

const routeProducto = Router();

routeProducto.get("/", getProducto );
routeProducto.get("/:id", getProductoUnico );
routeProducto.post("/",validate(postProductValidator), postProduct );

export default routeProducto;