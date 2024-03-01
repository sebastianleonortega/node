import { Router } from "express";
import routeProducto from "./producto.routes.js";

const router = Router();

router.use('/producto', routeProducto)

export default router;