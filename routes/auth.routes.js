import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const routeProducto = Router();

routeProducto.get("/get", login);

export default routerAuth;