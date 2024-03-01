import { Router } from "express";
import { getProducto, postProduct } from "../controllers/producto.controller.js";

const routeProducto = Router();

routeProducto.get("/", getProducto );
routeProducto.post("/", postProduct );

export default routeProducto;