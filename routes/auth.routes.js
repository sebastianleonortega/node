import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import {validate} from "../middlewares/validator.middleware.js";
import {authValidator} from "../validators/auth.validators.js";

const routerAuth = Router();

routerAuth.post("/", validate(authValidator), login);
routerAuth.post("/register", validate(authValidator), register);

export default routerAuth;