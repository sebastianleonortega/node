import { Router } from "express";
import routerProduct from "./producto.routes.js";
import routerAuth from "./auth.routes.js";

const router = Router();

router.use('/product', routerProduct)
router.use('/auth', routerAuth)

export default router;