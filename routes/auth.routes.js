import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import {validate} from "../middlewares/validator.middleware.js";
import {authValidator} from "../validators/auth.validators.js";

const routerAuth = Router();

routerAuth.get("/", validate(authValidator), login);
routerAuth.get("/register", validate(authValidator), register);

export default routerAuth;