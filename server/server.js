import express from "express";
import { envs } from "./src/config/env.config.js";

const server = express();

server.listen(envs.port, ()=>{
    console.log(`sever is starting at port ${envs.port}`)
})