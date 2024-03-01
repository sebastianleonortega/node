import bodyParser from "body-parser";
import express from "express";
import {env} from "./default.js";
import router from "../routes/index.routes.js";

export default class Server{

    constructor(){
        this.app = express();
        this.port = env.port;
    }

    connectionDB(){}


    middlewards(){
        // this.app.use(bodyParser.json());
        // this.app.use(bodyParser.urlencoded({extended: true}));

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    route(){
       this.app.use(router)
    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log("buenos dias");
        })
    }

    load(){
        this.connectionDB();
        this.middlewards();
        this.route();
        this.runServer();
    }
}