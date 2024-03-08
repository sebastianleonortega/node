import { Router } from "express";
import { getProducto, getProductoUnico, postProduct } from "../controllers/producto.controller.js";

const routeProducto = Router();

routeProducto.get("/get", getProducto );
routeProducto.get("/:id", getProductoUnico );
routeProducto.post("/", postProduct );

export default routeProducto;