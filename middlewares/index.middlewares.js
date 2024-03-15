import { Router } from "express";
import { verifyToken } from "./token.middleware.js";

const middle = Router();

middle.use('/producto', verifyToken);

export default middle;