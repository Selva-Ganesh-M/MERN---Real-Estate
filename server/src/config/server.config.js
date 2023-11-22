import express from "express";
import cors from "cors"
import { envs } from "./env.config.js";

export function startServer(server){
    server.use(cors());
    server.listen(envs.port, ()=>{
        console.log(`server started listening on port ${envs.port}`)
    });
}