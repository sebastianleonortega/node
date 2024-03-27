import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const routerAuth = Router();

routerAuth.get("/", login);
routerAuth.get("/register", register);

export default routerAuth;