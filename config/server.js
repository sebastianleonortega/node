import express from "express";
import cors from "cors";
import { env } from "./default.js";
import router from "../routes/index.routes.js";
import psService from "../services/pg.service.js";
import middle from "../middlewares/index.middlewares.js";

export default class Server {
    constructor() {
        this.app = express();
        this.port = env.port;
    }

    connectionDB() {
        new psService();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.setCorsPolicy();
        this.setReferrerPolicy();
        this.app.use(middle);
    }

    setCorsPolicy() {
        const corsOptions = {
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type,Authorization',
            credentials: true,
        };
        this.app.use(cors(corsOptions));
    }

    setReferrerPolicy() {
        this.app.use((req, res, next) => {
            res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
            next();
        });
    }

    route() {
        this.app.use(router);
    }

    runServer() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

    load() {
        this.connectionDB();
        this.middlewares();
        this.route();
        this.runServer();
    }
}
